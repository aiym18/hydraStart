import React from "react";
import { FaArrowRight } from "react-icons/fa";
import hero from '../../assets/img/hero.png'
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--text">
            <h1>
              <span>Dive</span> Into The Depths <br />
              Of <span>Virtual Reality</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />
              nisl tincidunt eget.Lectus mauris eros in vitae .
            </p>
            <div className="hero--icon">
              <button>BUILD YOUR WORLD</button>
              <a>
                <FaArrowRight />
              </a>
            </div>
          </div>
          <img src={hero} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
