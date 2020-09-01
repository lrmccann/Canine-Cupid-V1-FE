import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="header">
<h1 className="title"><span>Canine Cupid</span></h1>
<div class="navbar">
  <a href="/profile">My Profile</a>
  <a href="/matchnow">Match Now</a>
  <a href="/matches">Messages</a>
</div>
    </header>
  );
}


export default Header;