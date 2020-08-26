import React from "react";
import "./style.css";

function Wrapper(props) {
  console.log("props",props)
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
