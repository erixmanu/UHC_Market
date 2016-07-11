    Template.signup.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.signupEmail.value;
            var passwordVar = event.target.signupPassword.value;
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
        }
    });
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            Session.set('user', emailVar);
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });

Template.settings.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
});

Template.settings.helpers({
    'send_c': function() {
        return Session.get('user');
    }
});
