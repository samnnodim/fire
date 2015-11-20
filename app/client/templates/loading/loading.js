/*****************************************************************************/
/* Loading: Functions
/*****************************************************************************/
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
		var data = Meteor.call("getYouTubeData", id);
	}
});

Template.Loading.onRendered(function () {
  $(".progress-bar").animate({
    width: "100%"
  }, 10000, function () {
    window.location.href="/result";
  });
});

Template.Loading.onDestroyed(function () {
});
