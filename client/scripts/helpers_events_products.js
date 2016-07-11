import {Meteor} from 'meteor/meteor';
Meteor.subscribe('alcohol');
Meteor.subscribe('products');
Meteor.subscribe('baby');
Meteor.subscribe('bakery');
Meteor.subscribe('beverages');
Meteor.subscribe('food_cupboard');
Meteor.subscribe('frozen');
Meteor.subscribe('fruit_vegetables');
Meteor.subscribe('household');
Meteor.subscribe('meat_seafood');
Meteor.subscribe('pets');
/*HELPERS PARA MOSTRAR LOS PRODUCTOS DE CADA CATEGORIA*/
Template.alcoholProducts.helpers({
    alcohol: () => {
        return Alcohol.find();
    }
});

Template.babyProducts.helpers({
    baby: () => {
        return Baby.find();
    }
});

Template.bakeryProducts.helpers({
    bakery: () => {
        return Bakery.find();
    }
});

Template.beveragesProducts.helpers({
    beverages: () => {
        return Beverages.find();
    }
});

Template.food_cupboardProducts.helpers({
    food_cupboard: () => {
        return Food_Cupboard.find();
    }
});

Template.frozenProducts.helpers({
    frozen: () => {
        return Frozen.find();
    }
});

Template.fruit_vegetablesProducts.helpers({
    fruit_vegetables: () => {
        return Fruit_Vegetables.find();
    }
});

Template.householdProducts.helpers({
    household: () => {
        return Household.find();
    }
});

Template.meat_seafoodProducts.helpers({
    meat_seafood: () => {
        return Meat_Seafood.find();
    }
});

Template.petsProducts.helpers({
    pets: () => {
        return Pets.find();
    }
});
/***********************+ ADD CART EVENTS AND HELPERS OF ALCOHOL +**************************
evento que ayuda a almacenar los articulos seleccionados y mostrarlos en el cartLayout*/
Template.alcoholLayout.events({
  'click button': function(){
    Cart.add({
      relationType: 'alcohol',
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
        item: Alcohol.findOne({_id: item.relationId}),
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
      var product = Alcohol.findOne({_id: item.relationId});
      price += item.quantity * product.price;
    });
    return price;
  }
});

Template.cartLayout.events({
  "click #pay": function(event, template){
    alert('pagando!');
  }
});
