import React, { useContext } from "react";
import { UnitsContext } from "./UnitsContext";

export default function Wind(props) {
  const unit = useContext(UnitsContext);

  if (unit[0] === "metric") {
    return <span>{props.data}km/h</span>;
  } else {
    return <span>{Math.round(props.data / 1.609)}m/h</span>;
  }
}
