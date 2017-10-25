import Route from '@ember/routing/route';

const { set } = Ember;

export default Route.extend({
	beforeModel() {
		this.transitionTo('git-users');
	}
});
