$(function() {
  $(".matrix-message").typed({
    strings: ["   wAKe,", "   Wake up, Neo...", "   The Matrix has you.", "   Follow the white rabbit.", "   Knock, knock, Neo.", ""],
    typeSpeed: 80,
    backDelay: 1500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    callback: function(){
      $('.wrapper').fadeOut(100);
      $('.list').fadeIn(1000);
    } //load in the rabbit image and home link
  });
});
$(document).ready(function() {
  function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
      console.log("geo location not available");
      return;
    }

    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      console.log("latitude is "+latitude + " and longitude is " + longitude);
    };

    function error() {
      console.log("whoops, there is an error");
    };

    console.log("locating...")

    navigator.geolocation.getCurrentPosition(success, error);
  }

  $('button').on('click', geoFindMe);
});