import {Meteor} from 'meteor/meteor';
Meteor.subscribe('images');
Meteor.subscribe('products');
/*HELPERS PARA MOSTRAR LOS PRODUCTOS DE CADA CATEGORIA*/
Template.alcoholProducts.helpers({
    products: () => {
        return Products.find({category: "Alcohol"});
    }
});

// Template.alcoholLayout.events({
//
//     'click #showQuote' : function(t,e) {
//     console.log(this);
//     console.log(t);
//     console.log(e);
//     debugger;
//   }
// });




Template.babyProducts.helpers({
    products: () => {
        return Products.find({category: "Baby"});
    }
});

Template.bakeryProducts.helpers({
    products: () => {
        return Products.find({category: "Bakery"});
    }
});

Template.beveragesProducts.helpers({
    products: () => {
        return Products.find({category: "Beverages"});
    }
});

Template.food_cupboardProducts.helpers({
    products: () => {
        return Products.find({category: "Food_Cupboard"});
    }
});

Template.frozenProducts.helpers({
    products: () => {
        return Products.find({category: "Frozen"});
    }
});

Template.fruit_vegetablesProducts.helpers({
    products: () => {
        return Products.find({category: "Fruit_Vegetables"});
    }
});

Template.householdProducts.helpers({
    products: () => {
        return Products.find({category: "Household"});
    }
});

Template.meat_seafoodProducts.helpers({
    products: () => {
        return Products.find({category: "Meat_Seafood"});
    }
});

Template.petsProducts.helpers({
    products: () => {
        return Products.find({category: "Pets"});
    }
});
/***********************+ ADD CART EVENTS AND HELPERS OF PRODUCTS +**************************
evento que ayuda a almacenar los articulos seleccionados y mostrarlos en el cartLayout*/
Template.alcoholLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.babyLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.bakeryLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.beveragesLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.food_cupboardLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.frozenLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.fruit_vegetablesLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.householdLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.meat_seafoodLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.petsLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'products',
      relationId: this._id,
      // relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.cartLayout.helpers({
  items: function(){
    var items = [];
    Cart.items().forEach(function(item) {
      items.push({
        _id: item.relationId,
        item: Products.findOne({_id: item.relationId}),
        amount: item.quantity
      });
    });
    return items;
  },
  numItems: function(){
    return Cart.numItems();
  },
  totalPrice: function() {
    var price = 0;
    Cart.items().forEach(function(item) {
      var product = Products.findOne({_id: item.relationId});
      price += item.quantity * product.price;
        Meteor.call('TotalPrecio',price);
    });
    return price;
  }
});

Template.cartLayout.events({
  "click #pay": function(event, template){
    alert('pagando!');
  }
});
