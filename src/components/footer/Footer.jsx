import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="paddings innerWidth flexCenter f-container">
      {/* left side */}
      <div className="flexColStart f-left">
        <img src="./logo2.png" alt="Logo" width={120} />
        <span className="secondaryText">
          Our vision is to make all people <br />
          live at the best place.
        </span>
      </div>

      {/* right side */}
      <div className="flexColStart f-right">
        <span className="primaryText">Information</span>
        <span className="secondaryText">343 Ottawa, Ontario, Canada</span>
        <div className="flexCenter f-menu">
          <span>Property</span>
          <span>Service</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
