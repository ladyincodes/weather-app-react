import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let units = "metric";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      tempreture: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
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
          <WeatherInfo data={weatherData} />
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

    return (
      <div className='Weather container shadow-lg fixed-container d-flex justify-content-center'>
        <div className='mb-3'>
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='#F3F0FD'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClassName=''
            visible={true}
          />
        </div>
      </div>
    );
  }
}
