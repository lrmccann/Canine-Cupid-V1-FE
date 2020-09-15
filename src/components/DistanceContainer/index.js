import React from "react";
import Col from "../Col"
import "./style.css"


function DistanceContainer(props){
return (
<div className = "distanceContainer">
<h3>{props.userName} is located only :</h3>
<div className="line" style={{ border: "solid black 2px" }}></div>

</div>
)
};

export default DistanceContainer;