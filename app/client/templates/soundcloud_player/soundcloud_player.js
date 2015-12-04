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
});

Template.SoundCloudPlayer.onRendered(function () {
  var target = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + Session.get("SoundCloudId") + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
	$('#soundcloud_iframe').attr('src', target);
});

Template.SoundCloudPlayer.onDestroyed(function () {
});