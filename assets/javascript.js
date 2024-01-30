var APIKey = "d09804b968d33081f61891d0e45cea70";

function getWeather(query) {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    query +
    "&units=imperial&APPID=" + APIKey;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    fetch(url)
    .then((response) => response.json())
    .then((data) => displayMain(data));
}




//-------main
function displayMain(weather) {
    var resultContainer = document.querySelector("#main");
    var cityName = document.createElement("h2");
    resultContainer.append(cityName);
  var forecastMain = document.createElement("p");
  cityName.textContent = weather.city.name;
  resultContainer.append(cityName);
  var icon = document.createElement("img");
  var iconUrl =
    "http://openweathermap.org/img/w/" +
    weather.list[0].weather[0].icon +
    ".png";
  icon.setAttribute("src", iconUrl);



  var day1 = new Date(weather.list[0].dt * 1000);
  const month1 = day1.getMonth() + 1;
  const firstDay = day1.getDate();
  const year1 = day1.getFullYear();
  const outputDateStr1 = `${month1.toString().padStart(2, "0")}/${firstDay
    .toString()
    .padStart(2, "0")}/${year1.toString()}`;


    forecastMain.textContent = `${outputDateStr1} 
    Min ${weather.list[0].main.temp_min} F 
    Max: ${weather.list[0].main.temp_max} F 
    Humidity: ${weather.list[0].main.humidity}% 
    Weather conditions: ${weather.list[0].weather[0].description}`;
    var icon1 = document.createElement("img");
    var iconUrl1 =
      "http://openweathermap.org/img/w/" +
      weather.list[0].weather[0].icon +
      ".png";
    icon1.setAttribute("src", iconUrl1);
    forecastMain.append(icon1);
  }


//------------5days    
document
  .getElementById("cityForm")
  .addEventListener("submit", function (event) {

    $("#output").html("");


    event.preventDefault();
    var city = document.getElementById("city").value;
    getWeather(city);
  });

  function displayWeather(weather) {
    var resultContainer = document.querySelector("#output");
    var cityName = document.createElement("h2");
    resultContainer.append(cityName);
  var forecastDate1 = document.createElement("p");
  var forecastDate2 = document.createElement("p");
  var forecastDate3 = document.createElement("p");
  var forecastDate4 = document.createElement("p");
  var forecastDate5 = document.createElement("p");
  cityName.textContent = weather.city.name;
  resultContainer.append(cityName);
  var icon = document.createElement("img");
  var iconUrl =
    "http://openweathermap.org/img/w/" +
    weather.list[0].weather[0].icon +
    ".png";
  icon.setAttribute("src", iconUrl);




//================day1

  var description = document.createElement("p");
  var day1 = new Date(weather.list[0].dt * 1000);
  const month1 = day1.getMonth() + 1;
  const firstDay = day1.getDate();
  const year1 = day1.getFullYear();
  const outputDateStr1 = `${month1.toString().padStart(2, "0")}/${firstDay
    .toString()
    .padStart(2, "0")}/${year1.toString()}`;


    forecastDate1.textContent = `${outputDateStr1} 
    Min ${weather.list[0].main.temp_min} F 
    Max: ${weather.list[0].main.temp_max} F 
    Humidity: ${weather.list[0].main.humidity}% 
    Weather conditions: ${weather.list[0].weather[0].description}`;
    var icon1 = document.createElement("img");
    var iconUrl1 =
      "http://openweathermap.org/img/w/" +
      weather.list[0].weather[0].icon +
      ".png";
    icon1.setAttribute("src", iconUrl1);
    forecastDate1.append(icon1);





//===========================================day2
  var day2 = new Date(weather.list[8].dt * 1000);
  const month2 = day2.getMonth() + 1;
  const secondDay = day2.getDate();
  const year2 = day2.getFullYear();
  const outputDateStr2 = `${month2
    .toString()
    .padStart(2, "0")}/${secondDay
    .toString()
    .padStart(2, "0")}/${year2.toString()}`;

    forecastDate2.textContent = `${outputDateStr2} 
    Min ${weather.list[8].main.temp_min} F 
    Max: ${weather.list[8].main.temp_max} F 
    Humidity:  ${weather.list[8].main.humidity}% 
    Weather conditions: ${weather.list[8].weather[0].description}`;
    var icon2 = document.createElement("img");
    var iconUrl2 =
      "http://openweathermap.org/img/w/" +
      weather.list[8].weather[0].icon +
      ".png";
    icon2.setAttribute("src", iconUrl2);
    forecastDate2.append(icon2);



//-===============------------=-=-=-=-=-=-=-=-=-=-=-=-=-=-day3
  var day3 = new Date(weather.list[16].dt * 1000);
  const month3 = day3.getMonth() + 1;
  const thirdDay = day3.getDate();
  const year3 = day3.getFullYear();
  const outputDateStr3 = `${month3.toString().padStart(2, "0")}/${thirdDay
    .toString()
    .padStart(2, "0")}/${year3.toString()}`;

    forecastDate3.textContent = `${outputDateStr3} 
    Min ${weather.list[16].main.temp_min} F 
    Max: ${weather.list[16].main.temp_max} F 
    Humidity:  ${weather.list[16].main.humidity}% 
    Weather conditions: ${weather.list[16].weather[0].description}`;
    var icon3 = document.createElement("img");
    var iconUrl3 =
      "http://openweathermap.org/img/w/" +
      weather.list[16].weather[0].icon +
      ".png";
    icon3.setAttribute("src", iconUrl3);
    forecastDate3.append(icon3);


//=-=-=-=-=-=-=-=-=-=-=--==-=-=-=-=-=--==-=-=-=-=-=--=-==-day4
  var day4 = new Date(weather.list[24].dt * 1000);
  const month4 = day4.getMonth() + 1;
  const fourthDay = day4.getDate();
  const year4 = day4.getFullYear();
  const outputDateStr4 = `${month4
    .toString()
    .padStart(2, "0")}/${fourthDay
    .toString()
    .padStart(2, "0")}/${year4.toString()}`;

    forecastDate4.textContent = `${outputDateStr4} 
    Min ${weather.list[24].main.temp_min} F 
    Max: ${weather.list[24].main.temp_max} F 
    Humidity:  ${weather.list[24].main.humidity}% 
    Weather conditions: ${weather.list[24].weather[0].description}`;
    var icon4 = document.createElement("img");
    var iconUrl4 =
      "http://openweathermap.org/img/w/" +
      weather.list[24].weather[0].icon +
      ".png";
    icon4.setAttribute("src", iconUrl4);
    forecastDate4.append(icon4);


//=-=-=--==-=-=-=----------=-=-=-=-=-=-=-=-=-=-=-=-=-=-day5
  var day5 = new Date(weather.list[32].dt * 1000);
  const month5 = day5.getMonth() + 1;
  const fifthDay = day5.getDate();
  const year5 = day5.getFullYear();
  const outputDateStr5 = `${month5.toString().padStart(2, "0")}/${fifthDay
    .toString()
    .padStart(2, "0")}/${year5.toString()}`;

  forecastDate5.textContent = `${outputDateStr5} 
  Min ${weather.list[32].main.temp_min} F 
  Max: ${weather.list[32].main.temp_max} F 
  Humidity:  ${weather.list[32].main.humidity}% 
  Weather conditions: ${weather.list[32].weather[0].description}`;
  var icon5 = document.createElement("img");
  var iconUrl5 =
    "http://openweathermap.org/img/w/" +
    weather.list[32].weather[0].icon +
    ".png";
  icon5.setAttribute("src", iconUrl5);
  forecastDate5.append(icon5);

  resultContainer.append(forecastDate1);
  resultContainer.append(forecastDate2);
  resultContainer.append(forecastDate3);
  resultContainer.append(forecastDate4);
  resultContainer.append(forecastDate5);
}