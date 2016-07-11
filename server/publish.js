import {Meteor} from 'meteor/meteor';
Meteor.publish('alcohol', function() {
    return Alcohol.find();
});

Meteor.publish('baby', function() {
    return Baby.find();
});

Meteor.publish('bakery', function() {
    return Bakery.find();
});

Meteor.publish('beverages', function() {
    return Beverages.find();
});

Meteor.publish('food_cupboard', function() {
    return Food_Cupboard.find();
});

Meteor.publish('frozen', function() {
    return Frozen.find();
});

Meteor.publish('fruit_vegetables', function() {
    return Fruit_Vegetables.find();
});

Meteor.publish('household', function() {
    return Household.find();
});

Meteor.publish('meat_seafood', function() {
    return Meat_Seafood.find();
});

Meteor.publish('pets', function() {
    return Pets.find();
});

Meteor.publish('produtcs', function() {
    return Produtcs.find();
});

//publis data base images FS
Meteor.publish('images', function() {
    return Images.find();
});
