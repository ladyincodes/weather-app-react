import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiKey = "fb62bofac6t015b438385b08ffd2a8bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className='WeatherForecast'>
        <div className='row'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className='col' key={index}>
                  <WeatherForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
