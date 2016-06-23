import { Meteor } from 'meteor/meteor';

Meteor.subscribe('alcohol');

// funcion para la transisicion de sign_upbar
Template.navbar.events({
	'click .js-show-login' : function(){
		event.preventDefault();
    let element = $('.js-container_singupbar');
    if(element.hasClass('container_singupbar-show')){
      element.removeClass('container_singupbar-show');
      element.addClass('container_singupbar');
    }
    else {
      element.removeClass('container_singupbar');
      element.addClass('container_singupbar-show');
    }
	}
});
