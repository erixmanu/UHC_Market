import { Template } from 'meteor/templating';
import { ReactiVar } from 'meteor/reactive-var';
import { meteor } from 'meteor/meteor';
import '/client/stylesheet/main.css';
import 'path/to/font-awesome/css/font-awesome.min.css'

Template.navbar.events({
	'click .js-show-login' : function(){
		event.preventDefault();
    let element = $('.js-container_signupbar');
    if(element.hasClass('container_signupbar-show')){
      element.removeClass('container_signupbar-show');
      element.addClass('container_signupbar');
    }
    else {
      element.removeClass('container_signupbar');
      element.addClass('container_signupbar-show');
    }
	}
});
