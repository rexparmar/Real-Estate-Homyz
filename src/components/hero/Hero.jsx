import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter heroContainer ">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Discover <br />
                Most Suitable <br />
                Property
              </h1>
            </div>
            <div className="flexColStart hero-description">
              <span>
                Find a variety of properties that suit you very easily
              </span>
              <span>
                Forget all difficulties in finding a residence for you.
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" name="" id="" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={4400} end={4600} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={28}/>
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winnings</span>
              </div>
            </div>
          </div>

          <div className="flexCenter hero-Right">
            <div className="imageContainer">
              <img src="./hero-image.png" alt="HeroImage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
