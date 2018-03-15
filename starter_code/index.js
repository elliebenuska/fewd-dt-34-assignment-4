console.log("working");

$("a").click(function(event){
	event.preventDefault();
});

$(document).ready(function(){
	//Handler for .ready()called.
});

$(".readmore").click(function(){
	$("p").slideDown();
	$(".readmore").hide()
});

$(".readless").click(function(){
	$("#show-this-on-click").slideUp();
	$(".readless").hide()
	$(".readmore").show()
})

$(".learnmore").click(function(){
	$("#learnmoretext").slideDown();
	$(".learnmore").hide()
});