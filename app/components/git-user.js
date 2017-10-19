import Component from '@ember/component';
//import DS from 'ember-data';
import ENV from '../config/environment';

import XhrPromise from '../helpers/xhr-promise';

import $ from 'jquery';

export default Component.extend({
	users: Ember.inject.service(),
	
	didInsertElement() {
		this._super(...arguments);
		this.get('users').userList().then((users) => {
			this.set('users', users);
		});
	},
	actions: {
		chooseUser(user) {
			$("#git-users li").removeClass("active");
			
			$("#users_"+user.id).addClass("active");
		}
	}
});
