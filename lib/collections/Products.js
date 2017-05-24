import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Products = new Mongo.Collection('products');

ProductsSchema = new SimpleSchema({
  title:{
    type : String,
    label:"Product Name"
  },
  brand:{
    type: String,
    label: "Product Brand"
  },
  quantity:{
    type:String,
    label:"Product Quantity/Weight"
  },
  type:{
    type:String,
    label:"Product Type"
  },
  description:{
    type : String,
    label:"Description"
  },
  category:{
    type: String,
    label: "Product Category"
  },
  price :{
    type : Number,
    label : "Product Price",
    decimal: true
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
Products.attachSchema(ProductsSchema);
