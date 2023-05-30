import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Auckland",
    tempreture: 19,
    date: "Thursday 14:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

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
                <button type='submit' class='btn-pink form-control'>
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
            <img className='' src={weatherData.imgUrl} alt='Clear' />
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
              <li>
                <span></span>
                {weatherData.description}
              </li>
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
      </div>
    </div>
  );
}
