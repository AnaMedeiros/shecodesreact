import React from "react";

export default function Tomorow() {
  return (
    <div className="row card tomorrowBlock">
      <p className="tomorrow">
        <strong>Tomorrow</strong>
      </p>
      <p id="forcastDay1-temperature" className="tomorrowTemperature">
        15ºC
      </p>
      <img
        id="forcastDay1-icon"
        className="tomorrowIcon"
        src={"http://openweathermap.org/img/wn/04n@2x.png"}
        alt="Loading"
      />
    </div>
  );
}
