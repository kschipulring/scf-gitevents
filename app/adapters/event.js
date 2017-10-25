import EndpointCore from './endpointcore';
import ENV from '../config/environment';

export default EndpointCore.extend({
	namespace: "repos",

	pathForType() {
		return ENV.TEMP.urlParam.user + "/" + ENV.TEMP.urlParam.repo + '/events';
	}
});
