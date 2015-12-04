/*****************************************************************************/
/* Soundcloud: Event Handlers */
/*****************************************************************************/
Template.Soundcloud.events({
});

/*****************************************************************************/
/* Soundcloud: Helpers */
/*****************************************************************************/
Template.Soundcloud.helpers({
  attributes: function () {
    return {
      class: "embed",
      href: Session.get('link'), // set href to Session link
    };
  }
});

/*****************************************************************************/
/* Soundcloud: Lifecycle Hooks */
/*****************************************************************************/
Template.Soundcloud.onCreated(function () {
});

Template.Soundcloud.onRendered(function () {
  //Meteor.call("soundcloud_link");

  // O-embed the link
  $(function(){
   $("a.embed").oembed();
  });
});

Template.Soundcloud.onDestroyed(function () {
});
