/*****************************************************************************/
/* Form: Event Handlers */
/*****************************************************************************/

var lsContext;

Template.Form.events({
  'submit #form-submit' : function(event) {
    //validate that submitted text is a URL
    var url = event.target.link.value;
    var domain = "";
    if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];

    if(lsContext.validate({"url": domain})) {
      $('.invalid-warning').css("visibility", "nhidden");
      Session.set("link", true);
    } else {
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
