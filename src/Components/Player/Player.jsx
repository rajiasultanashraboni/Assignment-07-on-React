import "./player.css";
const Player = ({ player, handleSelectedPlayer }) => {
  const { image, name, price } = player;
  return (
    <div>
      {/* card section is here  */}
      <div className="player">
        <img src={image} alt="" />
        <div className="card-name">
          <i class="fa-solid fa-user"></i>
          <h2>{name}</h2>
        </div>
        <div className="flag">
          <div className="india">
            <i class="fa-solid fa-flag"></i>
            <p>India</p>
          </div>
          <button className="all-btn">All-Rounder</button>
        </div>
        <hr />
        <h4>Rating</h4>
        <div className="left-bat">
          <h5>Left-hand-bat</h5>
          <p>Left-hand-bat</p>
        </div>
        <div className="price">
          <p> Price:{price}</p>
          <button onClick={() => handleSelectedPlayer(player)}>
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
