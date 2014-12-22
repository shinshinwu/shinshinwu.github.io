$(document).ready(function() {
  $('#mercury').draggable({ revert: true });
  $('#venus').draggable({ revert: true });
  $('#earth').draggable({ revert: true });
  $('#moon').draggable({ revert: true });
  $('#mars').draggable({ revert: true });
  $('#jupiter').draggable({ revert: true });
  $('#saturn').draggable({ revert: true });
  $('#uranus').draggable({ revert: true });
  $('#neptune').draggable({ revert: true });

  $('#answer').click(function(){
    $('#wifi').show('slow');
    $('#wifi').addClass('animated infinite flash');

    $('#no-wifi1').show('slow');
    $('#no-wifi1').addClass('animated infinite flash');

    $('#no-wifi2').show('slow');
    $('#no-wifi2').addClass('animated infinite flash');

    $('button').text("Try dragging the planets!")
  });
});