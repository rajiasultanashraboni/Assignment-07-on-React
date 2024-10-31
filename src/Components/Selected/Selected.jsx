import React from "react";
import "./selected.css";

const Selected = ({ selectedPlayers, handleDelete }) => {
  return (
    <div>
      {selectedPlayers.map((player) => {
        return (
          <div key={player.id}>
            <div className="selected-container">
              <div>
                <img src={player.image} alt={player.name} />
                <p>Name: {player.name}</p>
                <p>Price: {player.price}</p>
              </div>
              <div className="Remove-icon">
                <i
                  onClick={() => handleDelete(player.id)}
                  class="fa-solid fa-trash"
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Selected;
