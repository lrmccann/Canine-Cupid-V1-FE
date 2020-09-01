import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col"

function CardTwo(props) {
  return (
    <Col size="md-4">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
            <h5>Name: {props.name}</h5> 
            </li>
            <li>
              <h5>Breed: {props.breed}</h5> 
            </li>
            <li>
              <h5>Favorite Toy: {props.favtoy}</h5> 
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}

export default CardTwo;