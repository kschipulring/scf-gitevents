import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	eventType: service(),
	router: Ember.inject.service('-routing'),
	didInsertElement() {
		this.get('eventType').eventTypePromise().then((eventTypes) => {
 			this.set('eventTypes', eventTypes);
 		});
	},
	actions: {
		chooseTypes(param) {
			var etList = $(param.srcElement).val();

			this.get("eventType").setSelectedTypes( $(param.srcElement).val() );

			//hide the events in the list
			$("div[data-event-group='events'] a").hide();

			//show only the ones in the currently selected list
			for( let i=0; i<etList.length; i++ ){
				$("a[data-event-type='" + etList[i] + "']").show();
			}
		},
		deselectAll() {
			$("#git-event-types option:selected").prop("selected", false);

			$("div[data-event-group='events'] a").show();
		}
	}
});
