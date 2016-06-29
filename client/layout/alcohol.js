//subscribe
Meteor.subscribe('alcohol');

Template.alcoholLayout.helpers({
  alcohol: ()=>{
    return Alcohol.find({});
  }
});
