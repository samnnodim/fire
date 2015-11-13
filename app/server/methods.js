/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
	getShitFromYoutube: function() {
	 var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id="
      + Session.get('url').substring(Session.get('url').indexOf("v=") + 2) + "&key=" + Meteor.settings.YOUTUBE_API_KEY + "&part=snippet,contentDetails,statistics,status";
    $.getJSON(requestUrl, function (data) {
      Session.setPersistent("data", data)
    });
	}
});
