import React from "react";
import Col from "../Col"
import "./style.css"

function MatchCards(props) {
    console.log(props)
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
                <Col size="md-7 messages">
                    <div>
                        <p className="text">{props.messages}{props.userName}</p>
                    </div>
                </Col>
                    </div>
                    <div className="messageBtn">
                <Col size="md-7 messageBtn">
                  
                <div className="button-container">
                <a style={{borderTopRightRadius: "15px", borderBottomRightRadius: "15px"}}type="submit" className="btn btn-primary btn-fix" href={`mailto:doggie@gmail.com?subject=RW:${props.messages}`}><p style={{marginTop: "9%"}}>Message Now</p></a>
            </div> 
                    
                </Col>
                </div>
            </Row-fixed>
        </div>
        </div>
    )
};

export default MatchCards;