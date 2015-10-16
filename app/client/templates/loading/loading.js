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
});

Template.Loading.onRendered(function () {
  $(".progress-bar").animate({
    width: "100%"
  }, 500, function () {
    window.location.href="/result";
  });
});

Template.Loading.onDestroyed(function () {
});
