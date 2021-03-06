import EndpointCore from './endpointcore';
import ENV from '../config/environment';

export default EndpointCore.extend({
	namespace: "users",

	pathForType() {
		return ENV.TEMP.urlParam.user + '/repos';
	}
});
