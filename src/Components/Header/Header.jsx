import "./Header.css";

const Header = ({ coins }) => {
  return (
    <div className="header-container">
      <div className="header-flex">
        <div>
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="flex-right">
          <p>Home</p>
          <p>Fixture</p>
          <p>Team</p>
          <p>Schedule</p>
          <button className="button">
            {coins} Coin <img src="/assets/dollar 1.png" alt="Dollar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
