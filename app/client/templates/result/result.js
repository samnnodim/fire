/*****************************************************************************/
/* Result: Event Handlers */
/*****************************************************************************/
Template.Result.events({
});

/*****************************************************************************/
/* Result: Helpers */
/*****************************************************************************/
Template.Result.helpers({
  state: function () {
    var heat_levels = ["SMOKEY BEAR-LEVEL SHIT. IT IS FIRE.", "QUIETLY BOILING WATER, MAYBE NEXT TIME", "ICE COLD BULLSHIT, TAKE THAT BACK WHERE YOU FOUND IT"];
    return heat_levels[Math.floor(Math.random()*heat_levels.length)];
  }
});

/*****************************************************************************/
/* Result: Lifecycle Hooks */
/*****************************************************************************/
Template.Result.onCreated(function () {
});

Template.Result.onRendered(function () {
});

Template.Result.onDestroyed(function () {
});
