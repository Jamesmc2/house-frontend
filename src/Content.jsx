import { useState, useEffect } from "react";
import { HouseIndex } from "./HouseIndex";
import { HouseNew } from "./HouseNew";
import axios from "axios";

export function Content() {
  const [houses, setHouses] = useState([]);

  const getHouses = () => {
    axios.get("http://localhost:3000/houses.json").then((response) => {
      setHouses(response.data);
    });
  };

  const createHouse = (params) => {
    axios.post("http://localhost:3000/houses.json", params).then((response) => {
      console.log(response.data);
      setHouses([...houses, response.data]);
    });
  };

  useEffect(getHouses, []);
  return (
    <div>
      <HouseNew onCreateHouse={createHouse} />
      <HouseIndex houses={houses} />
    </div>
  );
}
