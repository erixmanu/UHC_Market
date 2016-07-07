import {
    Meteor
} from 'meteor/meteor';

Meteor.subscribe('alcohol');
Meteor.subscribe('baby');
Meteor.subscribe('bakery');
Meteor.subscribe('beverages');
Meteor.subscribe('food_cupboard');
Meteor.subscribe('frozen');
Meteor.subscribe('fruit_vegetables');
Meteor.subscribe('household');
Meteor.subscribe('meat_seafood');
Meteor.subscribe('pets');

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
