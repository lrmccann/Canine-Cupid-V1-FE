import React from "react";
import Col from "../Col";
import "./style.css"

function ProfDetails(props){
    return (
        <Col size ="md-12">
            <div className="profDetails">
                <div className="content">
                    <h1>Profile Details</h1>
                    <div className="line"></div>
                    <h4>Username: {props.userName}</h4>
                    <h4>Location: {props.location}</h4>
                    <h4>Interested In: {props.interests}</h4>
                    <h4>Number of Pets: {props.numOfPets}</h4>
                    <h4>Join Date: {props.joinDate}</h4>
                </div>
            </div>
        </Col>



    );
}
export default ProfDetails;