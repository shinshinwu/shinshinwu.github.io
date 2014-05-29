$(document).ready(function() {
	$('#sailboat').draggable();
	$('#sailboat').mousedown(function() {
		$('p').fadeOut('slow')
	});
});