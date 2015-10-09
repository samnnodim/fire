var links = new FS.Store.GridFS("links");

Links = new FS.Collection("links", {
  stores: [new FS.Store.FileSystem("images", {path: ".uploads"})]
});

Links.deny({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  },
  download: function(){
    return false;
  }
});

Links.allow({
 insert: function(){
  return true;
 },
 update: function(){
  return true;
 },
 remove: function(){
  return true;
 },
 download: function(){
  return true;
 }
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    images: function () {
      return Links.find();
    }
  });

  Template.home.helpers({
    link: function () {
      return Session.get('link');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'change .myFileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Links.insert(file, function (err, fileObj) {
          if (err) {
            console.log("ERROR: ", err);
          } else {
            console.log("SUCCESSFUL UPLOAD");
          }
        });
      });
    }
  });

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
      Session.set('link', true);
      console.log("Mixtape detected");
    }
  });

  Template.loading.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      $(".progress-bar").animate({
        width: "100%"
      }, 500, function () {
        window.location.href="/result";
      };
    }
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
