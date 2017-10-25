import DS from 'ember-data';
import Model from 'ember-data/model';

//export default DS.Model.extend({

export default Model.extend({
	/*login: DS.attr('string'),
	id: DS.attr('number'),
	repos_url: DS.attr('string')*/
	userId: DS.attr(),
	body: DS.attr('string'),
	title: DS.attr('string')
});
