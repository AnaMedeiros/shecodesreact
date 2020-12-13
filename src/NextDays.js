import React from "react";

export default function NextDays() {
  return (
    <div className="row nextDaysBlock">
      <div className="card col-md-6 leftColumn next4Days">
        <p className="nextDays">
          <strong id="forcastDay2-day">Thursday</strong>
        </p>
        <p id="forcastDay2-temperature" className="nextDaysTemperature">
          12ºC
        </p>
        <img
          id="forcastDay2-icon"
          className="nextDaysIcon"
          src={"http://openweathermap.org/img/wn/10d@2x.png"}
          alt="Loading"
        />
      </div>
      <div className="card col-md-6 rightColumn next4Days">
        <p className="nextDays">
          <strong id="forcastDay3-day">Friday</strong>
        </p>
        <p id="forcastDay3-temperature" className="nextDaysTemperature">
          9ºC
        </p>
        <img
          id="forcastDay3-icon"
          className="nextDaysIcon"
          src={"http://openweathermap.org/img/wn/10d@2x.png"}
          alt="Loading"
        />
      </div>
      <div className="card col-md-6 leftColumn next4Days">
        <p className="nextDays">
          <strong id="forcastDay4-day">Saturday</strong>
        </p>
        <p id="forcastDay4-temperature" className="nextDaysTemperature">
          10ºC
        </p>
        <img
          id="forcastDay4-icon"
          className="nextDaysIcon"
          src={"http://openweathermap.org/img/wn/10d@2x.png"}
          alt="Loading"
        />
      </div>
      <div className="card col-md-6 rightColumn next4Days">
        <p className="nextDays">
          <strong id="forcastDay5-day">Sunday</strong>
        </p>
        <p id="forcastDay5-temperature" className="nextDaysTemperature">
          12ºC
        </p>
        <img
          id="forcastDay5-icon"
          className="nextDaysIcon"
          src={"http://openweathermap.org/img/wn/10d@2x.png"}
          alt="Loading"
        />
      </div>
    </div>
  );
}
