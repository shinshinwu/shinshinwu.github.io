$(document).ready(function() {

  $('.red').data("tile", 1);
  $('.blue').data("tile", 2);
  $('.green').data("tile", 3);
  $('.yellow').data("tile", 4);
  $('.grey').data("tile", 5);


  var sequence = [];

  function newRound(){
    var pick = Math.ceil(Math.random() * 5)
    sequence.push(pick);
    animate(sequence);
  };

  function lightUp(tile) {
    console.log("light up got executed!");
    var $tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function(){
      $tile.removeClass('lit');
    }, 300);
  }

  function playSound(tile) {
    console.log("play sound got executed!")
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/' + tile + '.ogg" tyle="audio/ogg" />');
    audio.append('<source src="sounds/' + tile + '.mp3" tyle="audio/mp3" />');
    $('[data-action=sound]').html(audio);
  };

  function animate(sequence){
    console.log("animate got executed!");
    var i =0;
    var interval = setInterval(function(){
      lightUp(sequence[i]);
      playSound(sequence[i]);

      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
      }
    }, 600);
  };

// function helper to compare two arrays, because you know, js is stupid
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  $('#title').on('click',newRound);

  $('.simon').on('click', function(event){
    var answer = [];
    var choice = "." + event.target.className
    answer.push($(choice).data("tile"));
    if (arraysEqual(answer, sequence)) {
      newRound();
    } else {
      console.log("No!");
    };
  });

});