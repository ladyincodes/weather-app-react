import React, { useContext } from "react";
import { UnitsContext } from "./UnitsContext";
import UnitConversion from "./UnitConversion";

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
        <span className='current-tempreture'>
          <UnitConversion data={props.data} type='temperature' />
        </span>
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
    return (
      <span className='WeatherTemperature'>
        <span className='current-tempreture'>
          <UnitConversion data={props.data} type='temperature' />
        </span>
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
