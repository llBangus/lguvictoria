import "./HeroImgStyle.css";

import React from "react";

import Intro_Img from "../assets/Home/Sample1.jpg";
import Mayor_Img from "../assets/Home/Sample2.png";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="Intro-Img" src={Intro_Img} alt="Sample1" />
      </div>

      <div className="welcome">
        <div className="welcome-tag">
          <h1>Welcome to Victoria</h1>
          <p>The fruit basket of the Oriental Mindoro</p>
        </div>
        <div className="mayor">
          <img className="mayor-Img" src={Mayor_Img} alt="Mayor" />
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
