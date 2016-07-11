//subscribe
Meteor.subscribe('images');
//Upload Image
Template.insert.events({
    'change #uploadsImage': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {});
        });
    }
});

//find Images
Template.insert.helpers({
    images: () => {
        return Images.find();
    }
});
