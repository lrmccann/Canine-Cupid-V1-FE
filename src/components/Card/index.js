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
          <img alt={user.petName} src={user.photoUrl} />
        </div>
        <div className="content">
          <ul>
            <li>
            <h5>Name: {user.petName}</h5> 
            </li>
            <li>
              <h5>Breed: {user.breed}</h5> 
            </li>
            <li>
              <h5>Age: {user.age}</h5> 
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}


export default Card;
