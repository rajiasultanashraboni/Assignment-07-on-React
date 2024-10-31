import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer-logo">
        <img src="/assets/logo-footer.png" alt="" />
      </div>
      <div className="footer-parent">
        <div className="footer-container">
          {/* fisrt div  */}
          <div>
            <h5>About Us</h5>
            <p className="para">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          {/* second div  */}
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Third div  */}
          <div>
            <h5>Subscribe</h5>
            <p className="para">
              Subscribe to our newsletter for the latest updates.
            </p>
            <input type="text" placeholder="Enter your name" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="newsletter">
          <img src="/assets/newsletter.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
