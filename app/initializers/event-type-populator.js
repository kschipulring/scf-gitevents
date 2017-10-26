import GetEventTypes from 'scf-gitevents/services/event-type';

export function initialize( application ) {
	//application.inject('route', 'foo', 'service:foo');

	//relying on the service
	var et = new GetEventTypes;
}

export default {
	initialize: initialize
};
