import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: "https://api.github.com"
});