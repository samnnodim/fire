/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
	getYouTubeData: function(url) {
		console.log("STARTED");
		var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id="
    	+ url.substring(url.indexOf("v=") + 2) + "&key=" + Meteor.settings.private.YOUTUBE_API_KEY + "&part=snippet,contentDetails,statistics";
		var asyncToSync = Meteor.wrapAsync(HTTP.get),
			getSyncYouTubeData = asyncToSync(requestUrl);
		return getSyncYouTubeData;
	}
});
