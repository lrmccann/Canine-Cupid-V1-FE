import React from "react";
import Col from "../Col"
import "./style.css"


function DistanceContainer(props){
return (
<Col size = "md-12">
<div className = "distanceContainer">
<h5>This cute pup is located only {props.distance} miles away</h5>

</div>
</Col>
)
};

export default DistanceContainer;