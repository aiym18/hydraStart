import React from "react";
import footer from "../../assets/img/footer.png";
import footer1 from "../../assets/img/footer1.png";
import footer2 from "../../assets/img/footer2.png";
import footer3 from "../../assets/img/footer3.png";
import footer4 from "../../assets/img/footer4.png";
import footer5 from "../../assets/img/footer5.png";
import footer6 from "../../assets/img/footer6.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img src={footer} alt="" />

          <div className="h"></div>
          <div className="footer--tex">
            <a>ABOUT</a>
            <a>SERVICES</a>
            <a>TECHNOLOGIES</a>
            <a>HOW TO</a>
            <a>JOIN HYDRA</a>
          </div>
          <div className="h"></div>
          <div className="footer--tex">
            <a>ABOUT</a>
            <a>SERVICES</a>
            <a>TECHNOLOGIES</a>
            <a>HOW TO</a>
            <a>JOIN HYDRA</a>
          </div>
          <div className="h"></div>
          <div className="footer--end">
            <h1>SOCIALIZE WITH HYDRA</h1>
            <div className="icon">
              <img src={footer1} alt="" />
              <img src={footer2} alt="" />
              <img src={footer3} alt="" />
              <img src={footer4} alt="" />
              <img src={footer5} alt="" />
              <img src={footer6} alt="" />
            </div>
            <button>BUILD YOUR WORLD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
