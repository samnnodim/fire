/*****************************************************************************/
/* YouTubePlayer: Event Handlers */
/*****************************************************************************/
Template.YouTubePlayer.events({
});

/*****************************************************************************/
/* YouTubePlayer: Helpers */
/*****************************************************************************/
Template.YouTubePlayer.helpers({
});

/*****************************************************************************/
/* YouTubePlayer: Lifecycle Hooks */
/*****************************************************************************/
Template.YouTubePlayer.onCreated(function () {
	
	// YouTube video player
	onYouTubeIframeAPIReady = function () {
		player = new YT.Player("YouTubePlayer", {
			height: "400",
			width: "600",
			videoId: Session.get("YouTubeId"),
			events: {
				onReady: function (event) {
					event.target.playVideo();
				}
			}
		});
	};
	YT.load();
});

Template.YouTubePlayer.onRendered(function () {
});

Template.YouTubePlayer.onDestroyed(function () {
});
