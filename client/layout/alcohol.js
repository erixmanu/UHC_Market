import { meteor } from 'meteor/meteor';
//subscribe
Meteor.subscribe('alcohol');

Template.alcohoLayout.helpers({
  alcohol: ()=>{
    return Alcohol.find();
  }
});
