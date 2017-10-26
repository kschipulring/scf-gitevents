import Service from '@ember/service';
import ENV from 'scf-gitevents/config/environment';

export default Service.extend({
	eventTypes() {
		// get the html from the remote github document
		return new Ember.RSVP.Promise(function(resolve, reject) {

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
		}); // end promise
	}
});
