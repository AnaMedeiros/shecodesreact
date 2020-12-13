import React, { useState } from "react";

export default function Today() {
  let [city, setCity] = useState("Porto");

  return (
    <div className="col-md-6 leftSide">
      <div className="card todayBlock">
        <form className="cityForm" id="selected-city-form">
          <input type="text" id="selectedCity" placeholder="Name the city" />
          <input type="submit" className="magnifyingGlass" id="search-button" />
          <input type="button" id="you-are-here-img" />
        </form>
        <h3 id="userLocation">Porto</h3>
        <div className="presentDay">
          <span id="currentDay">Tuesday,</span>

          <span id="currentHour">18:42</span>
        </div>

        <div className="todayTemperature">
          <span id="today-temperature">15</span>
          <span id="temperature-symbol">ºC</span>
          <button id="temperature-symbol-switch">ºF</button>
        </div>

        <img
          id="today-icon"
          className="todayIcon"
          src={"http://openweathermap.org/img/wn/04n@2x.png"}
          alt="Loading"
        />
        <div className="todayInfoBox">
          <p id="weather-description" className="todayInfo">
            Clouds
          </p>
          <p id="humidity" className="todayInfo">
            Humidity: 70%
          </p>
          <p id="wind-speed" className="todayInfo">
            Wind Speed: 0.89 m/s
          </p>
        </div>
      </div>
    </div>
  );
}
