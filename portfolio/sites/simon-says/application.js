$(document).ready(function() {

  function newRound(){
    console.log("new roud got executed!");
    var sequence = [1,2,1];
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

  $('.simon').on('click',newRound);

});