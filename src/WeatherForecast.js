import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let apiKey = "fb62bofac6t015b438385b08ffd2a8bd";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }

  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='WeatherForecast-day'>Thu</div>
          <WeatherIcon data='snow-day' size={36} />
          <div className='WeatherForcast-temperature'>
            <span className='WeatherForcast-temperature-max'>19°</span>
            <span className='WeatherForcast-temperature-min'>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
