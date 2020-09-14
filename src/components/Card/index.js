import React from "react";
import Col from "../Col";
import "./style.css";

function Card (props) {

  return (
    <Col size="md-6">
      <div className="card">
        <div className="img-container">
          <img alt={props.petName} src={props.photoUrl} />
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
