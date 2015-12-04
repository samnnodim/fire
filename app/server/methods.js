/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
	getYouTubeData: function(id) {
		var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id=" +
		id + "&key=" + Meteor.settings.private.YOUTUBE_API_KEY + "&part=snippet,contentDetails,statistics";
		var asyncToSync = Meteor.wrapAsync(HTTP.get),
			getSyncYouTubeData = asyncToSync(requestUrl);
		console.log(getSyncYouTubeData);
		return getSyncYouTubeData;
	},
	// getShitFromYoutube: function() {
	//  var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id=" + Session.get('url').substring(Session.get('url').indexOf("v=") + 2) + "&key=" + Meteor.settings.YOUTUBE_API_KEY + "&part=snippet,contentDetails,statistics,status";
  //   $.getJSON(requestUrl, function (data) {
  //     Session.setPersistent("data", data);
  //   });
	// },

  // Pings soundcloud API -- call using Meteor.call()
  soundcloud_link: function (url) {
   var client_id = Meteor.settings.private.soundcloud;
   // Send a request for data
   var response = HTTP.get('http://api.soundcloud.com/users/3207?client_id=' + client_id );
   // Parse the data in an acceptable format
   data = EJSON.parse(response.content);

   return(data.permalink_url);
  },
});
