import "./Banner.css";

const Banner = ({ addCoins }) => {
  return (
    <div className="banner-container">
      <div className="banner color">
        <img src="/assets/banner-main.png" alt="Banner" />
        <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p>Beyond Boundaries Beyond Limits</p>
        <button className="banner-btn" onClick={addCoins}>
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
