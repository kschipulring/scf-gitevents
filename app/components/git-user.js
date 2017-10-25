import Component from '@ember/component';
//import DS from 'ember-data';
import $ from 'jquery';

export default Component.extend({
	//users: Ember.inject.service(),
	
	didInsertElement() {
		this._super(...arguments);
		/*this.get('users').userList().then((users) => {
			this.set('users', users);
		});*/

		//console.log( 'DS.Store = ', DS.Store.findAll("users") );
		//console.log( 'DS = ', DS );
		
		//this.set('users',  this.store.findAll("users") );
	},
	actions: {
		chooseUser(user) {
			//jQuery, because it gets to the point
			$("#git-users li").removeClass("active");
			$("#users_"+user.id).addClass("active");
			
			
		}
	}
});
