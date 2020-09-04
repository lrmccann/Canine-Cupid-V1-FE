import React from "react";
import Col from "../Col"
import "./style.css"
import { Row, Container } from "../Grid";
import {MessageButton} from "../Button";


function MatchCards(props) {
    return (
        <div className="Container">
        <div className="mainCont flex-container">
            <Row-fixed>
                <div className="image">
                <Col size="md-3">
                    <div>
                        <img className="img" src={props.img} alt={props.img}></img>
                        <div>
                        <h5>{props.userName}</h5>
                    </div>
                    </div>
                </Col>
                    </div>
                    <div className="messages">
                <Col size="md-6 messages">
                    <div>
                        <p className="text">{props.messages}</p>
                    </div>
                </Col>
                    </div>
                    <div className="messageBtn">
                <Col size="md-3 messageBtn">
                    <MessageButton
                    text="Message now!"
                    />
                    
                </Col>
                </div>
            </Row-fixed>
        </div>
        </div>
    )
};

export default MatchCards;