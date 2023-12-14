const apiKey = "8a35e128cf8035df897e87cc40fae2a7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=&units=metric"

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    
}