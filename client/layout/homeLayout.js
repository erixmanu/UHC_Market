//subscribe
Meteor.subscribe('images');
//Upload Image
Template.HomeLayout.events({
'change #uploadsImage': function(event, template){
       FS.Utility.eachFile(event, function(file){
         Images.insert(file, function(err, fileObj){
           });
         });
       }
});

//find Images
Template.HomeLayout.helpers({
  images: ()=>{
    return Images.find();
  }
});
