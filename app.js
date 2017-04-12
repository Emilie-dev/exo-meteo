$(document).ready(function() {

	$.ajax({
		type : "get",
    	url :'http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=0dc029b5c62679926f9a47d2d19a06fc&mode=html&units=metric&lang={fr}'
       	})

		.done(function(data) {
       		$("#afficher").append(data);
       	})
       		
       	.fail(function() {
       		console.log('error');
       	})

       	.always(function() {
       		console.log('complete');
       	});
   



});