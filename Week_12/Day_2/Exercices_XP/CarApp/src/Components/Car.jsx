import { useState } from "react";
import Garage from './Garage.jsx';

function Car({ carInfo }) {
    const [color, changeColor] = useState("red");
    return (
    <div>
      <h1>This car is a {color} {carInfo.model} from the brand {carInfo.name}</h1>
      <Garage size="small" />

    </div>
  );
}

export default Car;