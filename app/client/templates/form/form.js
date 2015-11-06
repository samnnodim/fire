/*****************************************************************************/
/* Form: Event Handlers */
/*****************************************************************************/

var lsContext;
var url;

Template.Form.events({
  'submit #form-submit' : function(event) {
    // Stop default event action
    event.preventDefault();

    // Save the url entered
    var url = String(event.target.text.value);
    Session.setPersistent('url', url);

    // Clean up submitted text
    var domain = "";
    if (url.indexOf("://") > -1)
      domain = url.split('/')[2];
    else 
      domain = url.split('/')[0];
    domain = domain.split(':')[
    0];

    // Check if submitted text is a valid URL
    if(lsContext.validate({"url": domain})) {
      $('.invalid-warning').css("visibility", "hidden");
      Session.set('link', true);

      // YouTube API call
      var requestUrl = "https://www.googleapis.com/youtube/v3/videos?id="
        + url.substring(Session.get('url').indexOf("v=") + 2) + "&key=" + YOUTUBE_API_KEY + "&part=snippet&callback=?";
      $.getJSON(requestUrl, function (data) {
        Session.setPersistent("data", data)
      });
    } else {

      // If not a valid URL, tell the user
      $('.invalid-warning').css("visibility", "visible");
    }
  }
});

/*****************************************************************************/
/* Form: Helpers */
/*****************************************************************************/
Template.Form.helpers({
});

/*****************************************************************************/
/* Form: Lifecycle Hooks */
/*****************************************************************************/
Template.Form.onCreated(function () {
	var LinkSchema = new SimpleSchema({
	  url: {
	    type: String,
	    regEx: SimpleSchema.RegEx.Domain
	  }
	});
	lsContext = LinkSchema.newContext();
});

Template.Form.onRendered(function () {
});

Template.Form.onDestroyed(function () {
});
