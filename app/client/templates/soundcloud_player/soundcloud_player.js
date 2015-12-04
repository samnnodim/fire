/*****************************************************************************/
/* SoundcloudPlayer: Event Handlers */
/*****************************************************************************/
Template.SoundCloudPlayer.events({
});

/*****************************************************************************/
/* SoundcloudPlayer: Helpers */
/*****************************************************************************/
Template.SoundCloudPlayer.helpers({
});

/*****************************************************************************/
/* SoundcloudPlayer: Lifecycle Hooks */
/*****************************************************************************/
Template.SoundCloudPlayer.onCreated(function () {
	Meteor.http.call("GET", "https://api.soundcloud.com/resolve.json?url="
	+ Session.get("SoundCloudId") + "&client_id=" + Meteor.settings.public.SOUNDCLOUD_CLIENT_ID,
 	function (error, response) {
 		console.log(JSON.parse(response.content).id);
    var trackId = JSON.parse(response.content).id;
    var target = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + trackId + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
 		console.log(target);
		$('#soundcloud_iframe').attr('src', target);
	});
});

Template.SoundCloudPlayer.onRendered(function () {
});

Template.SoundCloudPlayer.onDestroyed(function () {
});