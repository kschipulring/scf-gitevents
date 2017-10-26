import DS from 'ember-data';
import GetEventTypes from '../services/event-type';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primarModelClass, payload, id, requestType) {
		payload = {repos: payload};

		console.log( "payload = ", payload );

		for(let i=0; i<payload.repos.length; i++){
			payload.repos[i].type = "repo";

			//how the user id login is passed on to the repo links
			payload.repos[i].ologin = payload.repos[i].owner.login;
		}

		var returner = this._super(store, primarModelClass, payload, id, requestType);


		var et = new GetEventTypes;

		/*et.eventTypes().then((types) => {

			//console.log( "cities = ", cities );

			//console.log( "types = ", types );
		});*/
		
		return returner;
	}
});
