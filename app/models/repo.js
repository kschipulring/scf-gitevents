import DS from 'ember-data';

export default DS.Model.extend({
	owner_login: DS.belongsTo('git-user'),
	name: DS.attr("string"),

});
