$(document).ready(function() {

	$.ajax({
		type : "get",
    	url :'http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=0dc029b5c62679926f9a47d2d19a06fc',
       	
       	success : function(data) {
       		console.log(data);
       		console.log('success');
       	},
       	error : function(err) {
       		console.log(err);
       		console.log('error');
       	}
    });









});