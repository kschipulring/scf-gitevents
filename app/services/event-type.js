import Service from '@ember/service';
import ENV from 'scf-gitevents/config/environment';

export default Service.extend({
	init(){
		//if the local storage is not currently populated with the list, then take the ajax, translate it to a list, then attach the joined list to local storage
		this.eventTypePromise().then((types) => {
			localStorage["eventTypes"] = types.join();
		});

		this._super(...arguments);
	},
	getEventTypeSplit(){
		return localStorage["eventTypes"].split(",");
	},
	eventTypePromise(){
		// get the html from the remote github document
		return new Ember.RSVP.Promise(function(resolve, reject) {
			var endArr = [];

			if( localStorage.hasOwnProperty("eventTypes") ){
				endArr = localStorage["eventTypes"].split(",");
			}

			if( endArr.length < 2 ){
				// get the html from the remote github document
				$.get(ENV.APP.API2.core, function(data, status){

					//jQuery time
					var $div = $("<div>", {id: "foo", "class": "a"});

					$("body").append( $div );

					var res = data.match(/<ul id\="markdown-toc">([\s\S]*?)<\/ul>/g);

					$("#foo").html( res );

					//make array from the temp html ul list
					var endArr = $( '#markdown-toc li > a' )
					.map(function() {
						return $(this).text();
					}).toArray();

					//remove temp div, as it is no longer needed
					$("#foo").remove();

					resolve( endArr );
				});  // end ajax request
			}else{
				resolve( endArr );
			}

		}); // end promise
	}
});
