import React from "react";
import header1 from "../../assets/img/Frame.png";
import header2 from "../../assets/img/header2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--img">
            <img src={header1} alt="" />
            <img src={header2} alt="" />
          </div>
          <div className="header--nav">
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
          </div>
          <div className="header--btn">
            <button className="btn1"> CONTACT US</button>
            <button className="btn2" >JOIN HYDRA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
