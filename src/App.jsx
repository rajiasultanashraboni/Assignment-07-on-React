import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Players from "./Components/Players/Players";
import Available from "./Components/Available/Available";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleSelectedPlayer = (newPlayer) => {
    const isExist = selectedPlayers.find(
      (player) => player.id === newPlayer.id
    );

    if (!isExist) {
      // Only add if player does not already exist
      const newPlayers = [...selectedPlayers, newPlayer];
      setSelectedPlayers(newPlayers);
    } else {
      alert("Player already selected");
    }
  };

  const handleDelete = (id) => {
    const remainingAfterRemove = selectedPlayers.filter(
      (player) => player.id != id
    );
    setSelectedPlayers(remainingAfterRemove);
  };

  const handleIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  const [coins, setCoins] = useState(0);

  // Function to add coins
  const addCoins = () => {
    setCoins(coins + 6000000);
  };
  return (
    <>
      <Header coins={coins} />
      <Banner addCoins={addCoins} />
      <Available
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
        selectedPlayers={selectedPlayers}
        handleDelete={handleDelete}
      ></Available>
      <Players handleSelectedPlayer={handleSelectedPlayer}></Players>

      <Footer></Footer>
    </>
  );
};

export default App;
