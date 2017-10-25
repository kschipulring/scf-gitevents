import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr("string"),
	eventType: DS.attr("string"),
	url: DS.attr("string")
});
