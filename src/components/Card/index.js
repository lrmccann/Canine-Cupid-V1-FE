import React, { useContext } from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col";
import UserContext from "../../utils/UserContext";

function Card () {

  const { user } = useContext(UserContext)
  console.log("Card", user)

  return (
    <Col size="md-6">
      <div className="card">
        <div className="img-container">
          <img alt={user.petName} src={user.photoUrl} style={{width: "423px"}} />
        </div>
        <div className="content">
          <ul>
            <li>
            <h4>Name: {user.petName}</h4> 
            </li>
            <li>
              <h4>Breed: {user.breed}</h4> 
            </li>
            <li>
              <h4>Age: {user.age}</h4> 
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}


export default Card;
