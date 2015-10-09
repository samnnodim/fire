var LinkSchema = new SimpleSchema({
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Domain
  }
});
var lsContext = LinkSchema.newContext();

if (Meteor.isClient) {
  Template.home.helpers({
    link: function () {
      return Session.get('link');
    }
  });

  Template.form.events({
    'submit #form-submit' : function(event) {
      //validate that submitted text is a URL
      if(lsContext.validate({url: event.target.link.value})) {
        $('.invalid-warning').css("visibility", "nhidden");
        Session.set("link", true);
      } else {
        $('.invalid-warning').css("visibility", "visible");
      }
    }
  });

  Template.home.helpers({
    link: function () {
      return Session.get('link');
    }
  });

  Template.result.helpers({
    state: function () {
      var heat_levels = ["SMOKEY BEAR-LEVEL SHIT. IT IS FIRE.", "QUIETLY BOILING WATER, MAYBE NEXT TIME", "ICE COLD BULLSHIT, TAKE THAT BACK WHERE YOU FOUND IT"];
      return heat_levels[Math.floor(Math.random()*heat_levels.length)];
    }
  })

  Template.loading.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      $(".progress-bar").animate({
        width: "100%"
      }, 500, function () {
        window.location.href="/result";
      });
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
