$(document).ready(function() {

  var fortunes = [
  "A conclusion is simply the place where you got tired of thinking.",
  "Flattery will go far tonight.",
  "Some men dream of fortunes, others dream of cookies.",
  "I am delicious",
  "You will be hungry again in one hour.",
  "Confucius say: if you think you’re going to sum up your whole life on this little bit of paper, you’re crazy.",
  "You will receive a fortune cookie.",
  "Some days you are pigeon, some days you are statue. Today, bring umbrella.",
  "Don’t fry bacon in the nude.",
  "When everything’s coming your way, you’re in the wrong lane.",
  "If opportunity doesn't knock, build a door. ",
  "Meh",
  "Ignore previous fortunes",
  "Help! I am being prisoner in a Chinese bakery!",
  "The fortune you seek is in another cookie.",
  "Some fortune cookies contain no fortune.",
  "Fortune said a palm can say a lot. Especially when it smacks.",
  "You will receive a fortune. (cookie)",
  "Someone has Googled you recently.",
  "You are not illiterate.",
  "Cookie said: 'You really crack me up.'",
  "Run.",
  "When you squeeze an orange, orange juice comes out - because that's what's inside.",
  "About time I got out of that cookie.",
  "Do or do not. There is no try.",
  "Don't marry for money. You can borrow it cheaper.",
  "You are cleverly disguised as responsible adult.",
  "Drive like hell, you will get there.",
  "The end is near, might as well have dessert.",
  "This fortune no good. Try another.",
  "Your fortune is as sweet as a cookie.",
  "Stop wishing. Start doing.",
  "Don't pursue happiness - create it.",
  "I think, you ate your fortune while you were eating your cookie",
  "How much deeper would the ocean be without sponges?",
  "I cannot help you, for I am just a cookie",
  "Oops...Wrong cookie",
  "Try again.",
  "The harder the fall, the higher the bounce.",
  "The best if yet to be.",
  "People do not fail...they give up trying.",
  "Have Fun."
  ];

  function appendText() {
    $('#text').html("<h3'>" + fortunes[Math.ceil(Math.random() * fortunes.length)] + "</h3>").css('display','inline').addClass('animated rubberBand');
  }

  $('#cookie').click(function(){
    $('#fortune').animate({
      marginLeft: "330px",
      paddingTop: "500px",
      zIndex: 3,
    }, 1500, function(){
      $('.box').css('transform', 'rotate(-46deg)');
      setTimeout(appendText, 2000);
    });
  });

});