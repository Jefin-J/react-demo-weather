import React from "react";

function WeatherBox({ place }) {
  return (
    <div>
      <div className="location-box">
        <div className="location">{place}, Country</div>
        <div className="date">{new Date().toDateString()}</div>
      </div>
      <div className="weather-box">
        <div className="temp">27 °C</div>
        <div className="weather">Clear Sky</div>
      </div>
    </div>
  );
}

export default WeatherBox;
