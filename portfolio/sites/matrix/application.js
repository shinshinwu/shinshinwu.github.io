
// typing js
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

// get geolocation and time to display customized msg
$(document).ready(function() {
  // function geoFindMe() {

  //   if (!navigator.geolocation){
  //     console.log("geo location not available");
  //     return;
  //   }

  //   function success(position) {
  //     var latitude = position.coords.latitude;
  //     var longitude = position.coords.longitude;

  //     console.log("latitude is "+latitude + " and longitude is " + longitude);
  //   };

  //   function error() {
  //     console.log("whoops, there is an error");
  //   };

  //   console.log("locating...")

  //   navigator.geolocation.getCurrentPosition(success, error);
  // }

  $('button').on('click', function(){
    function displayLocation(latitude,longitude){
      var request = new XMLHttpRequest();

      var method = 'GET';
      var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
      var async = true;

      request.open(method, url, async);
      request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
          var data = JSON.parse(request.responseText);
          var address = data.results[0];
          console.log(address.formatted_address);
          }
        };
        request.send();
      };

      var successCallback = function(position){
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        displayLocation(x,y);
      };

      var errorCallback = function(error){
        var errorMessage = 'Unknown error';
        switch(error.code) {
          case 1:
            errorMessage = 'Permission denied';
            break;
          case 2:
            errorMessage = 'Position unavailable';
            break;
          case 3:
            errorMessage = 'Timeout';
            break;
        }
        console.log(errorMessage);
      };

      var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);

  });
});

// ==================================================

// var d = new Date();
//     h = d.getHours();
//     m = d.getMinutes();

//     f = false;

// function greetingGenerator() {
//   var greeting = 'Good morning';
//   if (h >= 12) { var greeting = 'Good afternoon'; }
//   if (h >= 18) { var greeting = 'Good evening'; }

//   var greeting = '<h1>' + greeting + '. </h1>';

//   return greeting;
// }


// function geo(coord) {
//   var browser = $.browser.name + ' ' + $.browser.versionNumber;
//   var browser_os = $.os.name;
//   var full_time = getDateTime();

//   var reverse_geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coord + '&key=AIzaSyBq5hpfP26-SCDai9fKP3zv7ksTcGdI0Gs';
//   $.getJSON(reverse_geocoding, function(data) {

//       if(data.status == "ZERO_RESULTS") {
//         var address = '';
//       } else {
//         var address = data.results[0].formatted_address;
//       }

//       $.post('server/set_weather.php', {
//         geo: coord,
//         address: address,
//         browser: browser,
//         os: browser_os,
//         time: full_time
//       });
//   });
// }


// function getDateTime() {
//     var now = new Date();
//     var year = now.getFullYear();
//     var month = now.getMonth() + 1;
//     var day = now.getDate();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();

//     if(month.toString().length == 1) { var month = '0' + month; }
//     if(day.toString().length == 1) { var day = '0' + day; }
//     if(hour.toString().length == 1) { var hour = '0' + hour; }
//     if(minute.toString().length == 1) { var minute = '0' + minute; }
//     if(second.toString().length == 1) { var second = '0' + second; }

//     var datetime = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + 'Z';

//     console.log(datetime);

//     return datetime;
// }

