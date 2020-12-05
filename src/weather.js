const weather = document.querySelector(".weather");

const API_KEY = "b6f58fe4e5426d287734ede705f378e1";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((json) => {
      const temp = json.main.temp;
      const place = json.name;
      const icon = json.weather[0].description;
      weather.textContent = `
      ${place} ${temp}도 이며
      날씨는 ${icon}입니다.`;
    });
}

function handleSucess(event) {
  localStorage.setItem("lat", event.coords.latitude);
  localStorage.setItem("lng", event.coords.longitude);
  getWeather(event.coords.latitude, event.coords.longitude);
}

function handleError(event) {
  console.log(event);
}
function askCoords() {
  navigator.geolocation.getCurrentPosition(handleSucess, handleError);
}

function init() {
  askCoords();
}

init();
