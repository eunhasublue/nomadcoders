/*
getCurrentPosition()
1. 2가지 인수가 필요함
2. 하나는 모든게 잘 됐을 때 실행 될 함수
3. 두번째 인수는 에러가 발생했을 때, 실행 될 함수
*/

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
