
$(document).ready(function(){
	$(".in-b button").click(function(){
		$(".result-text").append("<p> <%= stuff %> </p>");
	});
});