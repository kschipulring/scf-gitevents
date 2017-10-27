import DS from 'ember-data';
import GetEventTypes from '../services/event-type';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primarModelClass, payload, id, requestType) {
		payload = {events: payload};

		for(let i=0; i<payload.events.length; i++){
			payload.events[i].eventType = payload.events[i].type;
			payload.events[i].type = "event";
			payload.events[i].url = payload.events[i].repo.url + "/events";
		}

		var returner = this._super(store, primarModelClass, payload, id, requestType);

		//resetting the event type box
		$("#git-event-types option:selected").prop("selected", false);

		return returner;
	}
});
