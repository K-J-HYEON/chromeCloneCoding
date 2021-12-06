const API_KEY = "694cf195e75cc0eaf4adf492c0ac3031"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // 섭씨 온도로 할려면 마지막&에 units=metric 추가해준다.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);