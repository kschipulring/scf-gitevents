import Route from '@ember/routing/route';

const { set } = Ember;

export default Route.extend({
	model() {
		return this.store.findAll('git-user');
	},

	setupController(controller, model) {
		set(controller, 'gitUsers', model );
	}
});
