//Generate codigo QR  {{> QrCode text=currentUserEmail }}
Template.QR.helpers({
    currentUserEmail: function() {
        return 'example@gmail.com';
    }
});
