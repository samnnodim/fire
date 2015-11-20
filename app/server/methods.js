/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
	getYouTubeData: function(id) {
		var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id="
    	+ id + "&key=" + Meteor.settings.private.YOUTUBE_API_KEY + "&part=statistics";
		var asyncToSync = Meteor.wrapAsync(HTTP.get),
			getSyncYouTubeData = asyncToSync(requestUrl);
		console.log(getSyncYouTubeData);
		return getSyncYouTubeData;
	}
});
