/*****************************************************************************/
/* Loading: Functions
/*****************************************************************************/
heat = 0;

function getYouTubeID(url) {
	var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	try {
		var match = url.match(rx)[1];
		Session.setPersistent("YouTubeId", match);
		return match;
	} catch(err) {
		Session.setPersistent("YouTubeId", "");
		return "";
	}
}

function getSoundCloudId(url) {
	if(url.indexOf("soundcloud.com") > -1) {
		var trackId;
		Meteor.http.call("GET", "https://api.soundcloud.com/resolve.json?url="
		+ Session.get("url") + "&client_id=" + Meteor.settings.public.SOUNDCLOUD_CLIENT_ID,
 		function (error, response) {
    	trackId = JSON.parse(response.content).id;
    	Session.setPersistent("SoundCloudId", trackId);
    });
		return Session.get("SoundCloudId");
	} else {
		Session.setPersistent("SoundCloudId", "");
		return "";
	}
}

/*****************************************************************************/
/* Loading: Event Handlers */
/*****************************************************************************/
Template.Loading.events({
});

/*****************************************************************************/
/* Loading: Helpers */
/*****************************************************************************/
Template.Loading.helpers({

});

/*****************************************************************************/
/* Loading: Lifecycle Hooks */
/*****************************************************************************/
Template.Loading.onCreated(function () {
	
	// YouTube Data API call
	var id = getYouTubeID(Session.get("url"));
	if(id != "") {
		Session.setPersistent("YouTubeId", id);
		var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id="
    	+ id + "&key=" + Meteor.settings.public.YOUTUBE_API_KEY + "&part=statistics";
		HTTP.call('GET', requestUrl, {}, function(error, response) {
			data = JSON.parse(response.content).items[0].statistics;
			heat = data.viewCount + data.likeCount - data.dislikeCount + data.favoriteCount + data.commentCount;
		});
	}

	// SoundCloud Data API Call
	var id = getSoundCloudId(Session.get("url"));
	if(id != "") {
		var requestUrl = "http://api.soundcloud.com/tracks/" + id + "?client_id=" + Meteor.settings.public.SOUNDCLOUD_CLIENT_ID;
		HTTP.call('GET', requestUrl, {}, function(error, response) {
			data = JSON.parse(response.content);
			heat = data.comment_count + data.favoritings_count + data.playback_count;
		});
	}
});

Template.Loading.onRendered(function () {
	Session.setPersistent("heat", heat);
  $(".progress-bar").animate({
    width: "100%"
  }, 500, function () {
    window.location.href="/result";
  });
});

Template.Loading.onDestroyed(function () {
});

function normalize(x, in_min, in_max, out_min, out_max) {
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
