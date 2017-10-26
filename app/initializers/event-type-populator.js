import GetEventTypes from 'scf-gitevents/services/event-type';

export function initialize( application ) {
	// application.inject('route', 'foo', 'service:foo');

	application.store = application.__container__.lookup('service:store');
	window.App = application; 

	//relying on the service
	var et = new GetEventTypes;
}

export default {
	initialize: initialize
};
