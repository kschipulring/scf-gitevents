import EndpointCore from './endpointcore';

export default EndpointCore.extend({
	namespace: 'orgs/SeeClickFix',
	pathForType(){
		return 'members';
	}
});
