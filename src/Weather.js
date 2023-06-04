import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import { UnitsContext } from "./UnitsContext";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [currentLocation, setCurrentLocation] = useState(false);
  const [unit, setUnit] = useState("metric");

  function handleResponse(response) {
    if (response.data.status !== "not_found") {
      setWeatherData({
        ready: true,
        city: response.data.city,
        tempreture: response.data.temperature.current,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        humidity: response.data.temperature.humidity,
        wind: Math.round(response.data.wind.speed),
      });
    } else {
      // if the data status was "not_found", it means there was no result
      canNotFindCity();
    }
  }

  function search() {
    const apiKey = "fb62bofac6t015b438385b08ffd2a8bd";
    let apiEndPoint = `https://api.shecodes.io/weather/v1/current?`;
    let apiUrl = `${apiEndPoint}query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(canNotFindCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function canNotFindCity() {
    alert("Please enter a valid city!");
  }

  // retrive current position latitude and longitude
  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "fb62bofac6t015b438385b08ffd2a8bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(canNotFindCity);
    // enables current btn after fatched data
    setCurrentLocation(false);
  }

  // get current
  function getCurrentLocation(event) {
    // // disables current btn until fetching data
    setCurrentLocation(true);
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <div className='container shadow-lg fixed-container'>
          <div className='search mt-2'>
            <form className='search-form' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-sm-6'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter a city...'
                    autoFocus='on'
                    onChange={handleCityChange}
                  />
                </div>
                <div className='col-sm-3 mt-2 mt-sm-0 pe-sm-1'>
                  <button type='submit' className='btn-pink form-control'>
                    Search
                  </button>
                </div>
                <div className='col-sm-3 mt-2 mt-sm-0 ps-sm-2'>
                  {currentLocation ? (
                    <button
                      className='btn-pink-secondary form-control'
                      disabled
                    >
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      ></span>
                    </button>
                  ) : (
                    <button
                      className='btn-pink-secondary form-control'
                      onClick={getCurrentLocation}
                    >
                      Current
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <hr className='mt-4' />
          <UnitsContext.Provider value={[unit, setUnit]}>
            <WeatherInfo data={weatherData} />
          </UnitsContext.Provider>
          <hr className='mt-4' />
          <WeatherForecast />
          <hr className='mt-4' />
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
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
