$(document).ready(function() {

  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var dayOfWeekIndex = (new Date()).getDay();

  // get days of the week
  var dayOfWeek = weekdays[dayOfWeekIndex];

  var city = "";

  var state = "";

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
        console.log(address);
        // grab city name
        console.log(address.address_components[3].long_name);
        // grab state name
        console.log(address.address_components[5].long_name);
        city += address.address_components[3].long_name;
        console.log(city);
        state += address.address_components[5].long_name; //state
        console.log(state);
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

    console.log(city);
    console.log(state);

    $(".matrix-message").typed({
      strings: ["   wAKe,", "   Wake up, Neo...", "Happy " + dayOfWeek, "   The Matrix has you in " + city + ", " + state, "   Follow the white rabbit.", "   Knock, knock, Neo.", ""],
      typeSpeed: 80,
      startDelay: 5000,
      backDelay: 1200,
      loop: false,
      loopCount: false,
      showCursor: true,
      cursorChar: "|",
      callback: function(){
        $('.wrapper').fadeOut(100);
        $('.list').fadeIn(1000);
      } //load in the rabbit image and home link
    });

    console.log(city);
    console.log(state);

});