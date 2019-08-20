/*$(document).ready(function(){
	getWeather();
})*/


function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

function getWeather(searchQuery){
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&units=metric&APPID="+apiKey

	$.ajax(url,{success: function(data){
		$(".city").text("City: " + data.name)
		$(".temp").text("Temp: " + data.main.temp + "C")
	}, error: function(error){
		$(".city").text("ERROR: Enter A Valid City Name")
	}})
}

function searchWeather(){
	var searchQuery = $(".search").val();
	getWeather(searchQuery)
}