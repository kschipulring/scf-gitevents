import Route from '@ember/routing/route';
import ENV from '../../config/environment';
import GetEventTypes from '../../services/event-type';

const { set } = Ember;

export default Route.extend({
	model(params) {
		//apply the params.id to the temporary variable for the urlParam property in the ENV or environment
		ENV.TEMP.urlParam.user = params.id;

		var returner = new Object();
		returner.repos = this.store.query('repo', {});

		//relying on the service
		var et = new GetEventTypes;

		et.eventTypePromise().then((types) => {
			//this.set('joke', cities);

			//console.log( "cities = ", cities );

			console.log( "the event types = ", types );

			//returner.eventTypes = types;

			console.log("window.App.store = ", window.App.store );

			/*window.App.store.createRecord('eventTypes', {
				list: types
			});*/
		});

		return returner;
	},

	/*setupController(controller, model) {
		set(controller, 'repos', model.repos );
	}*/
});
