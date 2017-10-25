import Route from '@ember/routing/route';
import ENV from '../../config/environment';

const { set } = Ember;

export default Route.extend({
	model(params) {
		//apply the params.id to the temporary variable for the urlParam property in the ENV or environment
		ENV.TEMP.urlParam.user = params.id;

		return this.store.query('repo', {});
	},

	setupController(controller, model) {
		set(controller, 'repos', model );
	}
});
