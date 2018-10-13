$(document).ready(function(){
  function switcher(){

var weather = $("#current").html();
var urls;

switch(weather) {

case "Thunderstorm":
urls = "https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2a375475a2ee3ad89ece59d89942a90&auto=format&fit=crop&w=500&q=60";
break;
case "Drizzle":
urls = "https://images.unsplash.com/photo-1503882605591-b7e176d21f03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70e21658ff103f1d9d67a869317bd0f4&auto=format&fit=crop&w=500&q=60";
break;
case "Rain":
urls = "https://images.unsplash.com/photo-1521359665816-34ae619026ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7879320f26d0d7ca3a12b53d917786b0&auto=format&fit=crop&w=500&q=60";
break;
case "Mist":
urls = "https://images.unsplash.com/photo-1444351422507-06c0a32f494d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f35b3dd05e55f7024dd99e24a22a01a7&auto=format&fit=crop&w=500&q=60";
break;
case "Snow":
urls = "https://images.unsplash.com/photo-1455717974081-0436a066bb96?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96d56d8a8dd2efb42e9e99c4c5fd0feb&auto=format&fit=crop&w=500&q=60";
break;
case "Fog":
urls = "https://images.unsplash.com/photo-1444351422507-06c0a32f494d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f35b3dd05e55f7024dd99e24a22a01a7&auto=format&fit=crop&w=500&q=60";
break;
case "Clear":
urls = "https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644951c9a9f2fdaf32192feeb7a33f7b&auto=format&fit=crop&w=500&q=60";
break;
case "Clouds":
urls = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8679c5f905a034df3296c6676fb84aa5&auto=format&fit=crop&w=500&q=60";
break;
default:
urls = "https://images.unsplash.com/photo-1469274817686-dd4d93da3b03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b10c4e35e485929b80847c6b276804ab&auto=format&fit=crop&w=500&q=60";

}
var thee = "url('" + urls +"')";
$(".background").css("background-image",thee);
}

  
  
  
  
  
  
  

if (navigator.geolocation) {

    
    navigator.geolocation.getCurrentPosition(function(position) {
  
$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=27add17534f0a518071911ddf48ec648", function(data){
  $("#background").fadeIn();
  $("#location").html(data.name + "," + data.sys.country)
  $("#number").html(data.main.temp + " &deg; C")
  $("#current").html(data.weather[0].main);
  $("#description").html(data.weather[0].description);
  $("#winds").html("Winds are: " + data.wind.speed + " km/h");
  
    switcher();

$("#celcius").click(function() {
  $("#number").html(data.main.temp + "&deg; C")
})
$("#fahrenheit").click(function() {
  $("#number").html(data.main.temp * 9 / 5 + 32 + "&deg; F")
})

  
}
         
      )
    }
                                             )}

})
                                           
function showForecast(){
    $("#fiveDay").fadeToggle(2000);

  
  if (navigator.geolocation) {

    
    navigator.geolocation.getCurrentPosition(function(position) {
  
  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=27add17534f0a518071911ddf48ec648", function(data){
 /*first day*/ 

  var ways =[data.list[4].main.temp, data.list[5].main.temp, data.list[6].main.temp, data.list[7].main.temp, data.list[8].main.temp, data.list[9].main.temp, data.list[10].main.temp, data.list[11].main.temp];
   
    var ways1 = Math.max(...ways);
    var rounder = Math.round(ways1);
    var smallest = Math.min(...ways);
    var rounder1 = Math.round(smallest);
    
    $("#val1").html(rounder + " C&deg;");
    $("#valOne").html(rounder1 + " C&deg;");
      var dateSplit = [];
      var days = data.list[4].dt_txt;
var propDate = '"' + new Date(days) + '"';
    var dateSplit = propDate.split("");
    var choice = dateSplit.slice(1, 4);

    $("#day1").html(choice);
     /*second day*/
    var ways_ =[data.list[12].main.temp, data.list[13].main.temp, data.list[14].main.temp, data.list[15].main.temp, data.list[16].main.temp, data.list[17].main.temp, data.list[18].main.temp, data.list[19].main.temp];
    var ways1_ = Math.max(...ways_);
    var rounder2 = Math.round(ways1_);
    var smallest_ = Math.min(...ways_);
    var rounder3 = Math.round(smallest_);
    
    $("#val2").html(rounder2 + " C&deg;");
    $("#valTwo").html(rounder3 + " C&deg;");
      var dateSplit_ = [];
      var days_ = data.list[12].dt_txt;
var propDate_ = '"' + new Date(days_) + '"';
    var dateSplit_ = propDate_.split("");
    var choice_ = dateSplit_.slice(1, 4);

    $("#day2").html(choice_);
    
    /*day 3 */

        var ways__ =[data.list[20].main.temp, data.list[21].main.temp, data.list[22].main.temp, data.list[23].main.temp, data.list[24].main.temp, data.list[25].main.temp, data.list[26].main.temp, data.list[27].main.temp];
    var ways1__ = Math.max(...ways__);
    var rounder2 = Math.round(ways1__);
    var smallest__ = Math.min(...ways__);
    var rounder3 = Math.round(smallest__);
    
    $("#val3").html(rounder2 + " C&deg;");
    $("#valThree").html(rounder3 + " C&deg;");
      var dateSplit__ = [];
      var days__ = data.list[20].dt_txt;
var propDate__ = '"' + new Date(days__) + '"';
    var dateSplit__ = propDate__.split("");
    var choice__ = dateSplit__.slice(1, 4);

    $("#day3").html(choice__);
  }
            )
    });
  }                                         
}
/*

switch

function switcher(){

var weather = $("#current").html();
var urls = ;

switch(weather) {

case "Thunderstorm":
urls = "https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2a375475a2ee3ad89ece59d89942a90&auto=format&fit=crop&w=500&q=60";
break;
case "Drizzle":
urls = "https://images.unsplash.com/photo-1503882605591-b7e176d21f03?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70e21658ff103f1d9d67a869317bd0f4&auto=format&fit=crop&w=500&q=60";
break;
case "Rain":
urls = "https://images.unsplash.com/photo-1521359665816-34ae619026ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7879320f26d0d7ca3a12b53d917786b0&auto=format&fit=crop&w=500&q=60";
break;
case "Snow":
urls = "https://images.unsplash.com/photo-1455717974081-0436a066bb96?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96d56d8a8dd2efb42e9e99c4c5fd0feb&auto=format&fit=crop&w=500&q=60";
break;
case "Atmosphere":
urls = "https://images.unsplash.com/photo-1444351422507-06c0a32f494d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f35b3dd05e55f7024dd99e24a22a01a7&auto=format&fit=crop&w=500&q=60";
break;
case "Clear":
urls = "https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644951c9a9f2fdaf32192feeb7a33f7b&auto=format&fit=crop&w=500&q=60";
break;
case "Clouds":
urls = "https://images.unsplash.com/photo-1480487453552-4d3c7d1d65e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3283bff1ab339a5a1e6538854485b9af&auto=format&fit=crop&w=500&q=60";
break;
default:
urls = "";

}

$(".background").css("background-image","url("'+ urls +'"));
}



*/