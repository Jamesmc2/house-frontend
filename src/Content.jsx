import { useState, useEffect } from "react";
import { HouseIndex } from "./HouseIndex";
import { HouseNew } from "./HouseNew";
import { Modal } from "./Modal";
import axios from "axios";
import { HouseShow } from "./HouseShow";
import { HouseUpdate } from "./HouseUpdate";

export function Content() {
  const [houses, setHouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentHouse, setCurrentHouse] = useState([]);

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

  const closeModal = () => {
    setShowModal(false);
  };

  const showHouse = (house) => {
    setShowModal(true);
    setCurrentHouse(house);
  };

  const handleUpdate = (params, id) => {
    axios.patch(`http://localhost:3000/houses/${id}.json`, params).then((response) => {
      setCurrentHouse(response.data);
      setHouses(
        houses.map((house) => {
          if (house.id === id) {
            return response.data;
          } else {
            return house;
          }
        })
      );
    });
  };

  useEffect(getHouses, []);
  return (
    <div>
      <HouseNew onCreateHouse={createHouse} />
      <HouseIndex houses={houses} showHouse={showHouse} />
      <Modal show={showModal} onClose={closeModal}>
        <HouseShow house={currentHouse} />
        <HouseUpdate house={currentHouse} handleUpdate={handleUpdate} />
      </Modal>
    </div>
  );
}
