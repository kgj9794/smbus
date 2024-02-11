const weather = document.querySelector(".js-weather");
const weather2 = document.querySelector(".js-weather2");
const weather3 = document.querySelector(".js-weather3");
const weather4 = document.querySelector(".js-weather4");
const API_KEY = "0849334613d7f1ea12dfb124b5b53003";
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
return response.json();
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.weather[0].description;
    const location = json.name;
    console.log(`현재위치: ${location} 현재날씨 : ${place}`);
    weather.innerText=`현재기온은 [${Math.round(temperature)} ℃]입니다.`
    weather4.innerText=`📍${location}`

if (place=='clear sky'){
  weather2.innerText=`현재날씨는 [맑음 ☀] 이며,`
} 
else if (place=='few clouds' || place=='overcast clouds'){
  weather2.innerText=`현재날씨는 [구름 조금 ⛅] 이며,`
}
else if (place=='scattered clouds'){
  weather2.innerText=`현재날씨는 [구름 많음 ☁] 이며,`
}
else if (place=='broken clouds'){
weather2.innerText=`현재날씨는 [흐림 ☁] 이며,`
}
else if (place=='shower rain' || place=='light intensity shower rain' || place=='heavy intensity shower rain' || place=='ragged shower rain'){
weather2.innerText=`현재날씨는 [소나기 🌦] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place=='light rain' || place=='moderate rain'){
weather2.innerText=`현재날씨는 [비 🌧] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place=='freezing rain'){
weather2.innerText=`현재날씨는 [얼어붙은 비 🌦] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place=='heavy intensity rain' || place=='very heavy rain' || place=='extreme rain' ){
weather2.innerText=`현재날씨는: [폭우 🌧] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place.match('Drizzle') || place.match('drizzle')){
weather2.innerText=`현재날씨는: [이슬비 🌧] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place.match('thunderstorm')){
weather2.innerText=`현재날씨는 [뇌우 ⛈] 이며,`
weather3.innerText=`오늘은 우산을 챙기는 것이 좋겠어요! 🌂`
}
else if (place=='light snow'){
weather2.innerText=`현재날씨는 [약한 눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}
else if (place=='snow'){
weather2.innerText=`현재날씨는 [눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Heavy snow'){
weather2.innerText=`현재날씨는 [폭설 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Sleet'){
weather2.innerText=`현재날씨는 [진눈깨비 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Light shower sleet'){
weather2.innerText=`현재날씨는 [비 또는 진눈깨비 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Shower sleet'){
weather2.innerText=`현재날씨는 [진눈깨비 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Light rain and snow'){
weather2.innerText=`현재날씨는 [비 또는 눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Rain and snow'){
weather2.innerText=`현재날씨는 [비 또는 눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Light shower snow'){
weather2.innerText=`현재날씨는 [비 또는 눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Shower snow'){
weather2.innerText=`현재날씨는 [소나기 눈 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}else if (place=='Heavy shower snow'){
weather2.innerText=`현재날씨는 [폭설 🌨] 이며,`
weather3.innerText=`⛄ 지금 밖에 눈와요! >.< ❄`
}
else if (place=='mist' || place=='fog' || place=='haze'){
weather2.innerText=`현재날씨는 [안개 🌫] 이며,`
}
else if (place=='squalls' || place=='tornado'){
weather2.innerText=`현재날씨는 [폭풍 🌪] 이며,`
}
else if (place=='sand/ dust whirls' || place=='sand' || place=='dust'){
weather2.innerText=`현재날씨는 [미세먼지 🌫] 이며,`
}

  });

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){

}

function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
  const loadedcoords = localStorage.getItem(COORDS);
  if(loadedcoords === null){
    askForCoords();
  }
  else{
    const parsedCoords = JSON.parse(loadedcoords);
  getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();

}

init();
