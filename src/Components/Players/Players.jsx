import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import "./players.css";

const Players = ({ handleSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <div className="players-container">
        {players.map((player) => (
          <Player
            handleSelectedPlayer={handleSelectedPlayer}
            key={player.id}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
