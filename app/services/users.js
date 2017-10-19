import Service from '@ember/service';
import ENV from '../config/environment';

export default Service.extend({
	users() {
		// this simulates fetching data across the network
		return new Ember.RSVP.Promise(function(resolve) {
			/*Ember.run.later(function() {
				resolve(["Paris", "Washington DC", "Bogota", "Nairobi", "Auckland"]);
			}, 3000);*/
			
			$.getJSON(ENV.APP.API1.core + ENV.APP.API1.users).then(function(data){
				console.log( data );
				
				resolve(data);
			});
		});
	}
});
