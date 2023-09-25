$(function(){
	var currentDate = new Date();

	$('.bg-custom').addClass('bg-custom-' + ('0' + (currentDate.getMonth()+1)).slice(-2));
});

// code templates
// $.ajax({
// 	method: "POST",
// 	url: url,
// 	data: data,
//  dataType: "jsonp",
// }).done(function(a,b,c) {}).fail(function(a,b,c) {}).always(function(a,b,c) {});