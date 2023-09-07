import { useState, useEffect } from "react";
import { HouseIndex } from "./HouseIndex";
import axios from "axios";

export function Content() {
  const [houses, setHouses] = useState([]);

  const getHouses = () => {
    console.log("getting houses");
    axios.get("http://localhost:3000/houses.json").then((response) => {
      console.log(response.data);
      setHouses(response.data);
    });
  };

  useEffect(getHouses, []);
  return (
    <div>
      <p>This is the content section</p>
      <HouseIndex houses={houses} />
    </div>
  );
}
