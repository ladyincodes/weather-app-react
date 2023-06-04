import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let max = `${Math.round(props.forecast.temperature.maximum)}°`;
    return max;
  }

  function minTemperature() {
    let min = `${Math.round(props.forecast.temperature.minimum)}°`;
    return min;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(props.forecast.time * 1000);
    return days[day.getDay()];
  }

  return (
    <>
      <div className='WeatherForecast-day'>{day()}</div>
      <WeatherIcon data={props.forecast.condition.icon} size={36} />
      <div className='WeatherForcast-temperature'>
        <span className='WeatherForcast-temperature-max'>
          {maxTemperature()}
        </span>
        <span className='WeatherForcast-temperature-min'>
          {minTemperature()}
        </span>
      </div>
    </>
  );
}
