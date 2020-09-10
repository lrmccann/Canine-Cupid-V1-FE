import React from "react";
import "./style.css";
import "./images/dog-cupid.png";

function Header(props) {
  return (
    <div className="row">
    <header className="header">
      <div className="picDiv">
        <img className="pic" alt="cupidog" src={require("./images/dog-cupid.png")}></img>
      </div>
      <h1 className="title"><span>Canine Cupid</span></h1>
      <div className="picDivTwo">
        <img className="pic" alt="cupidog"  src={require("./images/dog-cupid.png")}></img>
      </div>
    </header>
    </div>
  );
}


export default Header;