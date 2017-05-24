//subscribe
Meteor.subscribe('images');
//Upload Image
Template.insert.events({
    'change #uploadsImage': function(event, template) {
        var id = event.target.id.value;
        console.log(id);
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
