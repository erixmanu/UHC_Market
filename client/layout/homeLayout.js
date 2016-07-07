//subscribe
Meteor.subscribe('images');
//Upload Image
Template.homeLayout.events({
    'change #uploadsImage': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {});
        });
    }
});

//find Images
Template.homeLayout.helpers({
    images: () => {
        return Images.find();
    }
});
