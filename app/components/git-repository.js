import Component from '@ember/component';

import $ from 'jquery';

export default Component.extend({
	/*repositories: Ember.inject.service(),
	
	didInsertElement() {
		this._super(...arguments);
		this.get('repositories').repositoryList().then((repositories) => {
			this.set('repositories', repositories);
		});
	},
	actions: {
		chooseRepository(user) {
			//jQuery, because it gets to the point
			$("#git-repositories li").removeClass("active");
			$("#repositories_"+user.id).addClass("active");
			
			
		}
	}*/
});
