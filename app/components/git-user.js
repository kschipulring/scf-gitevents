import Component from '@ember/component';
//import DS from 'ember-data';
import ENV from '../config/environment';

import XhrPromise from '../helpers/xhr-promise';

export default Component.extend({
	users: Ember.inject.service(),
	
	didInsertElement() {
		this._super(...arguments);
		this.get('users').users().then((users) => {
			this.set('users', users);
		});
	}
	/*
	init() {
		this._super(...arguments);

		this.fart = function(){
			//this.users = ["rapist", "clown", "hobo"];
			
			//console.log( ENV );
			
			Ember.set(this,   );
		}
		
		this.users = ["adfdsa", "bras", "ddfdf"];
		
		//var larryTheFaggot = new Object();

		this.antcow = XhrPromise(ENV.APP.API1.core + ENV.APP.API1.users, this).then(function(response) {
			//console.log("Success!", response[0]);
			
			//response[1].users = ["rapist", "clown", "hobo"];
			
			//response[1].fart();
			
			console.log("this = ", _parent);
			
			return response[0];
			
			
			//this.users = ["rapist", "clown", "hobo"];
		}, function(error) {
			console.error("Failed!", error);
		});
	}*/
});
