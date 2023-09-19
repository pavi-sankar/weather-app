const apiKey = "9a904b1b83bed08b51a3e88812f8de42";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".body input");
const searchbtn=document.querySelector(".body button"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#celsius").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#atm").innerHTML = data.weather[0].main;
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});




const backgroundImages = ["weather-bg1.jpg", "weather-bg2.jpg", "wheather-bg3.jpg"];
const interval = 60000; 
const backgroundElement = document.querySelector(".container-fluid");

let currentIndex = 0;

function changeBackgroundImage() {
    backgroundElement.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}
changeBackgroundImage();

setInterval(changeBackgroundImage, interval);

