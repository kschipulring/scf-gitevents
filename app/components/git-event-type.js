import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	eventType: service(),
	didInsertElement() {
		this.get('eventType').eventTypePromise().then((eventTypes) => {
			console.log("eventTypes = " , eventTypes);

 			this.set('eventTypes', eventTypes);
 		});
	}
});
