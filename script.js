$(document).ready(function() {
    $('#getWeatherBtn').click(function() {
        var apiKey = '8ab451355fed3071774d487d2224261d'; 
        var city = $('#cityInput').val();
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                $('#weatherInfo').html(
                    '<h2>Weather in ' + response.name + '</h2>' +
                    '<p>Temperature: ' + (response.main.temp - 273.15).toFixed(2) + '°C</p>' +
                    '<p>Weather: ' + response.weather[0].description + '</p>' +
                    '<p>Humidity: ' + response.main.humidity + '%</p>' +
                    '<p>Wind Speed: ' + response.wind.speed + ' m/s</p>'
                );
            } else if (this.readyState == 4) {
                $('#weatherInfo').html('<p>Error fetching weather data. Please try again later.</p>');
            }
        };
        xhttp.open("GET", apiUrl, true);
        xhttp.send();
    });
});
