import DS from 'ember-data';

export default DS.Model.extend({
	repo: DS.hasMany(''),
	login: DS.attr('string')
});
