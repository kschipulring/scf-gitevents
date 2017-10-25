import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primarModelClass, payload, id, requestType) {
		payload = {events: payload};

		for(let i=0; i<payload.events.length; i++){
			payload.events[i].eventType = payload.events[i].type;
			payload.events[i].type = "event";
			payload.events[i].url = payload.events[i].repo.url + "/events";
			//https://api.github.com/repos/kschipulring/palmasettemiinc/events
		}

		var returner = this._super(store, primarModelClass, payload, id, requestType);

		return returner;
	}
});
