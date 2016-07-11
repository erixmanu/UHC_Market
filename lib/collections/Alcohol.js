import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Alcohol = new Mongo.Collection('alcohol');

AlcoholSchema = new SimpleSchema({
  title:{
    type : String,
    label:"Product Name"
  },
  description:{
    type : String,
    label:"Description"
  },
  price :{
    type : Number,
    label : "Price"
  },
  img:{
  type: String,
  label: "Logo",
  autoform: {
    afFieldInput: {
      type: "cfs-file",
      collection: "images",
    }
  }
  }
});
Alcohol.attachSchema( AlcoholSchema );
