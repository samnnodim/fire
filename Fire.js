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
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
