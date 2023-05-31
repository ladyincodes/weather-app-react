import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let units = "metric";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      tempreture: Math.round(response.data.temperature.current),
      date: "Thursday 14:00",
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <div className='container shadow-lg fixed-container'>
          <div className='search mt-2'>
            <form className='search-form'>
              <div className='row'>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter a city...'
                    autoFocus='on'
                  />
                </div>
                <div className='col-sm-3 mt-2 mt-sm-0 pe-sm-1'>
                  <button type='submit' className='btn-pink form-control'>
                    Search
                  </button>
                </div>
                <div className='col-sm-3 mt-2 mt-sm-0 ps-sm-2'>
                  <button
                    type='submit'
                    className='btn-pink-secondary form-control'
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr className='mt-4' />

          <h2 className='display-5 mt-4 fw-bolder'>{weatherData.city}</h2>

          <div className='todays-forcast row'>
            <div className='display-tempreture col-sm-6'>
              <img src={weatherData.imgUrl} alt='Clear' />
              <span className='current-tempreture' data-name='temperature'>
                {weatherData.tempreture}
              </span>
              <span className='fs-5 tempreture-unit text-end'>
                <a href='/'>°C</a>
                <span> | </span>
                <a href='/'>°F</a>
              </span>
            </div>

            <div className='observations col-sm-6 text-end'>
              <ul>
                <li>
                  <span>Last updated: {weatherData.date}</span>
                </li>
                <li className='text-capitalize'>{weatherData.description}</li>
                <li>
                  Humidity:{" "}
                  <span className='bolded-information'>
                    {weatherData.humidity}%
                  </span>
                  , Wind:
                  <span className='bolded-information'>
                    {weatherData.wind}km/h
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr className='mt-4' />
          <Footer />
        </div>
      </div>
    );
  } else {
    const apiKey = "fb62bofac6t015b438385b08ffd2a8bd";
    let apiEndPoint = `https://api.shecodes.io/weather/v1/current?`;
    let apiUrl = `${apiEndPoint}query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
