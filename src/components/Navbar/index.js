import React from "react"
import "./style.css";
import { MyProfileButton, MatchNowButton, MatchesButton, LogOutButton } from "../Button"



export function Navbar() {

  return (
    <div className="navbar">
    <MyProfileButton/>
    <MatchNowButton/>
    <MatchesButton/>
    <LogOutButton/>
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