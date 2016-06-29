import { Meteor } from 'meteor/meteor';
//publis data base alcohol
Meteor.publish('alcohol', function alcoholPublication() {
  return Alcohol.find();
});
//publis data base animals
Meteor.publish('animals', function animalsPublication() {
  return Alcohol.find();
});
//publis data base babies
Meteor.publish('babies', function babiesPublication() {
  return Alcohol.find();
});
//publis data base beverages
Meteor.publish('beverages', function beveragesPublication() {
  return Alcohol.find();
});
//publis data base fruits
Meteor.publish('fruits', function fruitslPublication() {
  return Alcohol.find();
});
//publis data base home
Meteor.publish('home', function homePublication() {
  return Alcohol.find();
});
//publis data base pharmacy
Meteor.publish('pharmacy', function pharmacyPublication() {
  return Alcohol.find();
});
//publis data base seafood
Meteor.publish('seafood', function seafoodPublication() {
  return Alcohol.find();
});
//publis data base vegetables
Meteor.publish('vegetables', function vegetablesPublication() {
  return Alcohol.find();
});
//publis data base images FS
Meteor.publish('images',  function(){
  return Images.find();
});

Meteor.publish('EntriesImage',  function(){
  return EntriesImages.find();
});
