import {Meteor} from 'meteor/meteor';

Meteor.publish('products', function() {
    return Products.find();
});

//publis data base images FS
Meteor.publish('images', function() {
    return Images.find();
});
