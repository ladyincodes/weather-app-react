import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Wind from "./Wind";

export default function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
      <h2 className='display-5 mt-4 fw-bolder city-title'>{props.data.city}</h2>

      <div className='todays-forcast row'>
        <div className='display-tempreture col-sm-6'>
          <WeatherIcon data={props.data.icon} />
          <WeatherTemperature data={props.data.tempreture} />
        </div>

        <div className='observations col-sm-6 text-end'>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <li className='text-capitalize'>{props.data.description}</li>
            <li>
              Humidity:{" "}
              <span className='bolded-information'>{props.data.humidity}%</span>
              , Wind:
              <span className='bolded-information'>
                <Wind data={props.data.wind} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
