import React from "react";
import "./style.css";
import { Redirect } from "react-router";

export function Navbar(props) {
  return (
    // <div class="navbar">
    <div className="navbar">
      <a className="nav-content" href="/profile">My Profile</a>
      <a className="nav-content" href="/signup">Edit Profile</a>
      <a className="nav-content" href="/matchnow">Match Now</a>
      <a className="nav-content" href="/matches">Matches</a>
      <a className="nav-content" href="/matches">Options</a>
    </div>
  );
}

export function NavbarNolinks() {
  return (
    <div className="navbar">
    </div>
  );
}

export default Navbar;