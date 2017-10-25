import Route from '@ember/routing/route';
import ENV from '../../../config/environment';

const { set } = Ember;

export default Route.extend({
	model(params) {
		//apply the params.id to the temporary variable for the urlParam property in the ENV or environment
		ENV.TEMP.urlParam.repo = params.eid;

		console.log(this.get('routeName'));

		return this.store.query('event', {});
	},

	setupController(controller, model) {
		set(controller, 'events', model );
	}
});
