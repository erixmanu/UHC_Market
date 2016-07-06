import { meteor } from 'meteor/meteor';
//subscribe
Meteor.subscribe('alcohol');
Meteor.subscribe('animals');
Meteor.subscribe('babies');
Meteor.subscribe('bakery');

//find products alcohol
Template.alcohoLayout.helpers({
  alcohol: ()=>{
    return Alcohol.find();
  }
});
//find products animals
Template.animaLayout.helpers({
  animal: ()=>{
    return Animals.find();
  }
});
//find products babies
Template.babieLayout.helpers({
  babie: ()=>{
    return Babies.find();
  }
});

Template.bakeryLayout.helpers({
  bakery: ()=>{
    return Bakery.find();
  }
});
