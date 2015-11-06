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

  	// Levels of fire
    var heat_levels = ["SMOKEY BEAR-LEVEL SHIT. IT IS FIRE.", "QUIETLY BOILING WATER, MAYBE NEXT TIME", "ICE COLD BULLSHIT, TAKE THAT BACK WHERE YOU FOUND IT"];

    // isitfire.com is fire af
    if (Session.get('url').indexOf("isitfire.com") > -1)
    	return "FOREST FIRE SHIT. CAN YOU FETCH A BROTHER SOME WATER?";
    else 
    	return heat_levels[Math.floor(Math.random()*heat_levels.length)];
  }
});

/*****************************************************************************/
/* Result: Lifecycle Hooks */
/*****************************************************************************/
Template.Result.onCreated(function () {
	console.log("https://www.googleapis.com/youtube/v3/videos?id="
        + Session.get("url").substring(Session.get('url').indexOf("v=") + 2) + "&key=" + YOUTUBE_API_KEY + "&part=snippet&callback=?");
	console.log(Session.get("data"));
});

Template.Result.onRendered(function () {
});

Template.Result.onDestroyed(function () {
});
