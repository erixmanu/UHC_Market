import { Meteor } from 'meteor/meteor';
Meteor.publish('alcohol', function alcoholPublication() {
  return Alcohol.find();
});
