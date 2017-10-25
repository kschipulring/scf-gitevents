import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType){

		var quack = new Object();

		var quack = {
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON API paints my bikeshed!",
      "body": "The shortest article. Ever.",
      "created": "2015-05-22T14:56:29.000Z",
      "updated": "2015-05-22T14:56:28.000Z"
    },
    "relationships": {
      "author": {
        "data": {"id": "42", "type": "people"}
      }
    }
  }],
  "included": [
    {
      "type": "people",
      "id": "42",
      "attributes": {
        "name": "John",
        "age": 80,
        "gender": "male"
      }
    }
  ]
};

		payload = { members: payload, member: [] };


		//payload.meta.queriedAt = +new Date();

		//payload = { data: payload };

		console.log(payload);  console.log("pigs are cute and funny when they get slaughtered");

		return this._super(store, primaryModelClass, payload, id, requestType);
		//this._super(...arguments);
	}
});
