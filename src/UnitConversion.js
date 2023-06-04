import { useContext } from "react";
import { UnitsContext } from "./UnitsContext";

export default function UnitConversion(props) {
  const unit = useContext(UnitsContext);

  function convertToMile() {
    return `${Math.round(props.data / 1.609)}m/h`;
  }

  function convertToFahrenheit() {
    let fahrenheit = Math.round((props.data * 9) / 5 + 32);
    return fahrenheit;
  }

  switch (props.type) {
    case "temperature":
      if (unit[0] === "metric") {
        return Math.round(props.data);
      } else {
        return convertToFahrenheit();
      }

    case "wind":
      if (unit[0] === "metric") {
        return `${props.data}km/h`;
      } else {
        return convertToMile();
      }

    default:
      return null;
  }
}
