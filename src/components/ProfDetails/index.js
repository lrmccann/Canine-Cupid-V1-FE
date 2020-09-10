import React, { useContext } from "react";
import Col from "../Col"
import "./style.css"
import UserContext from "../../utils/UserContext";

function ProfDetails(props){
    const { user } = useContext(UserContext)
    console.log("ProfDatails", user)
    // let date = user.date.toDateString()

    return (
        <Col size ="md-12">
            <div className="profDetails">
                <div className="content">
                    <h1>Profile Details</h1>
                    <div className="line"></div>
                    <h4>Username: {user.userName}</h4>
                    <h4>Location: {user.city}</h4>
                    <h4>About pet: {user.info}</h4>
                    <h4>Join Date: {user.date}</h4>
                    {/* <h4>Username: {props.userName}</h4>
                    <h4>Location: {props.location}</h4>
                    <h4>Interested In: {props.interests}</h4>
                    <h4>Number of Pets: {props.numOfPets}</h4>
                    <h4>Join Date: {props.joinDate}</h4> */}
                </div>
            </div>
        </Col>
    );
}
export default ProfDetails;