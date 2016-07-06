import { Meteor } from 'meteor/meteor';
//publis data base alcohol
Meteor.publish('alcohol', function () {
  return Alcohol.find();
});
//publis data base animals
Meteor.publish('animals', function () {
  return Animals.find();
});
//publis data base babies
Meteor.publish('babies', function () {
  return Babies.find();
});
//publis data base beverages
Meteor.publish('beverages', function () {
  return Beverages.find();
});
//publis data base fruits_vegetables
Meteor.publish('fruits_vegetables', function (){
  return Fruits_Vegetables.find();
});

Meteor.publish('frozen', function (){
  return Frozen.find();
});
//publish data base bakery
Meteor.publish('bakery', function (){
  return Bakery.find();
});

Meteor.publish('household', function (){
  return Household.find();
});

Meteor.publish('food_cupboard', function (){
  return Food_Cupboard.find();
});

//publis data base meat_seafood
Meteor.publish('meat_seafood', function(){
  return Meat_Seafood.find();
});

//publis data base images FS
Meteor.publish('images',  function(){
  return Images.find();
});

Meteor.publish('EntriesImage',  function(){
  return EntriesImages.find();
});
