import EndpointCore from './endpointcore';

export default EndpointCore.extend({
	namespace: 'orgs/SeeClickFix',
	pathForType(){
		return 'members';
	}

	/*pathForType() {
		//return ENV.API1.users;
		//return "members";
		return "posts";
	}*/
});
