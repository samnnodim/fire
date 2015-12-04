/*****************************************************************************/
/* Player: Event Handlers */
/*****************************************************************************/
Template.Player.events({
});

/*****************************************************************************/
/* Player: Helpers */
/*****************************************************************************/
Template.Player.helpers({
});

/*****************************************************************************/
/* Player: Lifecycle Hooks */
/*****************************************************************************/
Template.Player.onCreated(function () {
	console.log();
	onYouTubeIframeAPIReady = function () {
		player = new YT.Player("player", {
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

Template.Player.onRendered(function () {
});

Template.Player.onDestroyed(function () {
});
