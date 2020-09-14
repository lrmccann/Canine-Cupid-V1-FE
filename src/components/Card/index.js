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
            <h4>Name:&nbsp; {user.petName}</h4> 
            </li>
            <li>
              <h4>Breed:&nbsp; {user.breed}</h4> 
            </li>
            <li>
              <h4>Age:&nbsp;&nbsp;&nbsp; {user.age}</h4> 
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}


export default Card;
