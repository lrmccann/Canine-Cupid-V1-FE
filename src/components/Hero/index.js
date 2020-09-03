import React from "react";
// import "./style.css";
import Photo from "../../images/portfolio-photo.png"

function Hero() {
  return (
    <div className="hero text-center" >
      <img src={Photo} alt={NameOfPicture} />
    </div>
  );
}

export default Hero;
