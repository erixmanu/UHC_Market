Meteor.startup(function() {
    Stripe.setPublishableKey(Meteor.settings.public.stripe_pk);
});

Template.cartLayout.events({
  "submit .form-horizontal": function(event, template){
    event.preventDefault();
    Stripe.card.createToken({
      number   : $('#ccnum').val(),
      cvc      : $('#cvc').val(),
      exp_month: $('#exp-month').val(),
      exp_year : $('#exp-year').val()
    }, stripeCallback);
  }
});

function stripeCallback (status, response) {
  if (status !== 200) {
    toastr.error(null, response.message);
    return;
  }

  stripeToken = response.id;
  Meteor.call('chargeCard', stripeToken, Cart.items().fetch(), Meteor.userId(), function(err, result) {
    if (err) {
      toastr.error(null, err);
    } else {
      toastr.success(null, 'Compra realizada!');
      Cart.empty();
    }
  });
}
