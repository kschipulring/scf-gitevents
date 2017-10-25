import Route from '@ember/routing/route';

export default Route.extend({
	model () {
		//var currentRoute = this.get('routing').get('currentRouteName');

		//console.log( currentRoute );

		console.log( this );
	}
});
