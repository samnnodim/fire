if (Meteor.isClient) {
  Template.form.events({
    'click .form-button': function(event) {
      event.preventDefault();
      window.location.href="/link";
    }
  })

  Template.loading.helpers({
    status: function () {
      return Session.get('status');
    }
  })

  Template.loading.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Session.set("status", "Analyzing heat content...")
      $(".progress-bar").animate({
        width: "100%"
      }, 1000, function() {
        Session.set("status", "Done.")
      });
      
      console.log("Template rendered");
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    
  });
}

Router.route('/', function() {
  this.render('form');
});

Router.route('/link', function() {
  this.render('loading');
});