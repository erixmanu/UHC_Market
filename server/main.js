import { Meteor } from 'meteor/meteor';
console.log(Alcohol.find().fetch());

Meteor.startup(() => {
  // code to run on server at startup
});
