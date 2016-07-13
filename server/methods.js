Meteor.methods({
  'chargeCard': function(stripeToken, items, user) {
    var amount =preciofinal*100;
    var Stripe = StripeAPI(Meteor.settings.private.stripe_sk);
    Stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});

Meteor.methods({
'TotalPrecio': function(todo)
{preciofinal=todo;}
})
