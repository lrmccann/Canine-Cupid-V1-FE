import React from "react";
import "./style.css";
// import { Redirect } from "react-router";
// import { useHistory } from "react-router-dom";
import { MyProfileButton, MatchNowButton, MatchesButton, LogOutButton } from "../Button"

export function Navbar(props) {
  return (
    // <div class="navbar">
    <div className="navbar">
    <MyProfileButton/>
    <MatchNowButton/>
    <MatchesButton/>
    <LogOutButton/>
      {/* <a className="nav-content" href="/profile">My Profile</a>
      <a className="nav-content" href="/signup">Edit Profile</a>
      <a className="nav-content" href="/matchnow">Match Now</a>
      <a className="nav-content" href="/matches">Matches</a>
      <a className="nav-content" href="/matches">Options</a> */}
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