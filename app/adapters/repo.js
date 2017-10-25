import EndpointCore from './endpointcore';
import ENV from '../config/environment';

console.log( "ENV.TEMP.urlParam.user = ", ENV.TEMP.urlParam.user );

export default EndpointCore.extend({
	namespace: "users",

	pathForType() {
		return ENV.TEMP.urlParam.user + '/repos';
	}
});
