let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let daynow = document.querySelector(".date");
daynow.innerHTML = `${day} ${hours} : ${minutes}`;

function citys(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#city-input");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${changeCity.value}`;
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", citys);

function temp() {
  let temp1 = document.querySelector("#temperature");
  temp1.innerHTML = "66";
}
let tempF = document.querySelector("#fahrenheit-link");
tempF.addEventListener("click", temp);

function otherTemp() {
  let temp2 = document.querySelector("#temperature");
  temp2.innerHTML = "19";
}
let tempC = document.querySelector("#celsius-link");
tempC.addEventListener("click", otherTemp);

function searchTemp(response) {
  document.querySelector("#curentTemp").innerHTML =
    Math.round(response.data.main.temp) + "°C";
  document.querySelector("h1").innerHTML = response.data.name;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "f050a1f8bd2cdc44c425ac2a582a6696";
  let nowCity = document.querySelector("#cityFound").value;
  let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${nowCity}&appid=${apiKey}&units=metric`;
  axios.get(apiWeather).then(searchTemp);
}

let form = document.querySelector("#form");
form.addEventListener("submit", searchCity);

function positionNow(position) {
  let apiKey = "f050a1f8bd2cdc44c425ac2a582a6696";
  let apiNow = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiNow).then(searchTemp);
}

function myLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(positionNow);
}
let currentButton = document.querySelector("#curentButton");
currentButton.addEventListener("click", myLocation);
