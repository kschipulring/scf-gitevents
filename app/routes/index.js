import Route from '@ember/routing/route';

const { set } = Ember;

export default Route.extend({
	model() {
		//return this.get('store').findAll('members');

		return this.store.findAll('git-user');
		
		/*var returner = new Object();

		returner["users"] = $.get('https://api.github.com/orgs/SeeClickFix/members');*/

		//var preModel = {};
		//var preModel = this.get('store').findAll('members');
		//var preModel = this.get('store').findAll(1);

		//var returner = $.get('https://api.github.com/orgs/SeeClickFix/members');

		//console.log("preModel = ", preModel);

		//return preModel;

		/*var preModel = this.get('store').findAll('git-users');

		//var preModel = this.get('store').query('git-users');

		console.log( preModel );

		return preModel;*/
	},

	setupController(controller, model) {
		set(controller, 'gitUsers', model );
	}
});
