$(document).ready(function() {

  $('.red').data("tile", 1);
  $('.blue').data("tile", 2);
  $('.green').data("tile", 3);
  $('.yellow').data("tile", 4);
  $('.grey').data("tile", 5);


  var sequence = [];
  var answer = [];

  function newRound(){
    console.log("newRound got executed!");
    answer = [];
    var pick = Math.ceil(Math.random() * 5);
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

// start game

  $('#start').on('click',newRound);

  var clickCounter = 0;
  var score = 0;

  $('.simon').on('click', function(event){
    clickCounter += 1;
    var choice = "." + event.target.className
    var guess = $(choice).data("tile");
    answer.push(guess);
    console.log(guess);
    console.log(answer);
    console.log(sequence);
    console.log(clickCounter);
    console.log(answer[(clickCounter-1)]);
    console.log(sequence[(clickCounter-1)]);

// check if current answer matches
    if ( (answer[(clickCounter-1)] == sequence[(clickCounter-1)]) === false ) {
      counter = 0;
      sequence = [];
      answer = [];
      console.log("You lost!")
    };
// check if entire answer array matches
    if ( (sequence.length > 0) && (answer.length === sequence.length) ) {
      console.log("I got executed!")
      if (arraysEqual(answer, sequence)) {
        console.log("I got executed!")
        clickCounter = 0;
        score += 1;
        newRound();
      } else {
          clickCounter = 0;
          sequence = [];
          answer = [];
          console.log("You lost!");
      };
    };

  });

});