import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col";

function Card(props) {
  return (
    <Col size="md-4">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
            <strong>{props.name}</strong> 
            </li>
            <li>
              <a href={props.github}>Github:</a> 
            </li>
            <li>
              <strong>Deployed:</strong> {props.deployed}
            </li>
          </ul>
        </div>
      </div>
    </Col>

  );
}

export default Card;
