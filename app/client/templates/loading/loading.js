/*****************************************************************************/
/* Loading: Functions
/*****************************************************************************/
function getYouTubeID(url) {
	var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	return url.match(rx)[1];
}

function getSoundcloudID(url) {
	var sc = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)/;
	console.log(url.match(sc)[0]);
	console.log(url.match(sc)[1]);
	return url.match(sc)[1];
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
	//Session.set("YouTubeId", getYouTubeID(Session.get('url')));
	Session.set("SoundcloudId", getSoundcloudID(Session.get('url')));

	//Meteor.call("soundcloud_link", getSoundcloudID(Session.get('url')));
	// YouTube Data API call
	//Meteor.call("getYouTubeData", getYouTubeID(Session.get('url')));
});

Template.Loading.onRendered(function () {
  $(".progress-bar").animate({
    width: "100%"
  }, 100, function () {
    window.location.href="/result";
  });
});

Template.Loading.onDestroyed(function () {
});
