if (Meteor.isClient) {
  Template.form.events({
    'click .form-button': function(event) {
      event.preventDefault();
      Session.set("link", true);
    }
  });

  Template.home.helpers({
    link: function () {
      return Session.get('link');
    }
  });

  Template.result.helpers({
    state: function () {
      var heat_levels = ["SMOKEY BEAR-LEVEL SHIT", "BOILING WATER RIGHT THERE", "MODERATELY COOL FLAME", "NON-FIRE BULLSHIT, TAKE THAT BACK WHERE YOU FOUND IT"];
      return heat_levels[Math.floor(Math.random()*heat_levels.length)];
    }
  })

  Template.loading.helpers({
    status: function () {
      return Session.get('status');
    }
  });

  Template.loading.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Session.set("status", "Analyzing heat content...")
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
