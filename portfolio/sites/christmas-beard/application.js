$(document).ready(function() {

  var ornaments = $(".ornaments").children()
  ornaments.draggable({helper: 'clone'});

  $(".beard").droppable({
    accept: ornaments,
    drop: function(event, ui) {
      console.log("Item was dropped");
      $(this).append($(ui.helper).clone());
    }
  });

});