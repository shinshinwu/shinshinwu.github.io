$(document).ready(function() {
	// draggable effects
	$('.draggable').draggable();
	$('.draggable').mousedown(function() {
		var $text_box = $(this).find('p');
		$text_box.fadeOut('slow')
	});
	// image carousel
	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-480},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},3000);
});