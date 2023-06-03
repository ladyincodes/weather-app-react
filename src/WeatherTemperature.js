import React, { useContext } from "react";
import { UnitsContext } from "./UnitsContext";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useContext(UnitsContext);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <span className='WeatherTemperature'>
        <span className='current-tempreture'>{Math.round(props.data)}</span>
        <span className='fs-5 tempreture-unit text-end'>
          <span className='selected_tempreture'>°C</span>
          <span> | </span>
          <a href='/' onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.data * 9) / 5 + 32);
    return (
      <span className='WeatherTemperature'>
        <span className='current-tempreture'>{fahrenheit}</span>
        <span className='fs-5 tempreture-unit text-end'>
          <a href='/' onClick={showCelsius}>
            °C
          </a>
          <span> | </span> <span className='selected_tempreture'>°F</span>
        </span>
      </span>
    );
  }
}
