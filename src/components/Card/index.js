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
        <h4>{props.children}</h4>
        </div>
      </div>
    </Col>

  );
}


export default Card;
