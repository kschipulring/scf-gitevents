import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primarModelClass, payload, id, requestType) {
		payload = {gitUsers: payload};

		for(let i=0; i<payload.gitUsers.length; i++){
			payload.gitUsers[i].type = "member";
		}

		var returner = this._super(store, primarModelClass, payload, id, requestType);

		return returner;
	}
});
