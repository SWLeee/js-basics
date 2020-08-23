const API_KEY = "2eb842bcedb830ed0d752c4c85d8b70c";
const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 객체에 변수의 이름과 객체의 ket의 이름을 같게 저장할 때는 위와 같이 나타낼 수 있음
    latitude, // latitude: latitude,
    longitude, // longitude: longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
