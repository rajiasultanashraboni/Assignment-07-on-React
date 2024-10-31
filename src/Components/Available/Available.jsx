import Selected from "../Selected/Selected";
import "./available.css";
const Available = ({
  handleIsActiveState,
  isActive,
  selectedPlayers,
  handleDelete,
}) => {
  return (
    <div className="available-container">
      <h1>Available Players</h1>
      <div>
        <button
          onClick={() => handleIsActiveState("cart")}
          className={`${isActive.available ? "btn active" : "btn"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleIsActiveState("about")}
          className={`${isActive.available ? "btn" : "active btn"}`}
        >
          Selected {selectedPlayers.length}
        </button>
      </div>
      {isActive.available ? (
        <player></player>
      ) : (
        <Selected
          selectedPlayers={selectedPlayers}
          handleDelete={handleDelete}
        ></Selected>
      )}
    </div>
  );
};

export default Available;
