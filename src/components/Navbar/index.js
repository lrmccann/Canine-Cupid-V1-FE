import React from "react";
import "./style.css";
import { Redirect } from "react-router";



function Navbar(props) {
  return (
    <div class="navbar">
      <a className="nav-content" href="/profile">Home</a>
      <a className="nav-content" href="/matchnow">Match Now</a>
      <a className="nav-content" href="/matches">Matches</a>
      <a className="nav-content" href="/matches">Options</a>
    </div>
  );
}


export default Navbar;