import React, { useEffect, useState, Component } from "react";
import Col from "../Col"
import "./style.css"

// console.log(this.state.data[0].props.data[0].userData.userName)

export default class MatchCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [props]
        }
    }

    render(props){
            return (
                <div>
                    <div className="Container">
                        <div className="mainCont flex-container">
                            <Row-fixed>
                                <div className="image">
                                    <Col size="md-3">
                                        <div>
                                            <img className="img" src={this.props.image} alt={this.state.data[0].props.data[0].userData.userName}></img>
                                            <div>
                                                <h5>{this.state.data[0].props.data[0].userData.userName}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="messages">
                                    <Col size="md-7 messages">
                                        <div>
                                            <p className="text">{this.props.message}{this.state.data[0].props.data[0].userData.userName}</p>
                                        </div>
                                    </Col>
                                </div>
                                <div className="messageBtn">
                                    <Col size="md-7 messageBtn">
    
                                        <div className="button-container">
                                            <a style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px",backgroundColor: "#8ABAD3FF" }} type="submit" className="btn button-message" href={`mailto:doggie@gmail.com?subject=RW:`}><p className="btnText" style={{  fontFamily: "Arial", textEmphasis: "bolder" }}>Message Now</p></a>
    
                                        </div>
    
                                    </Col>
                                </div>
                            </Row-fixed>
                        </div>
                    </div>
                    </div>
            )
        }
    }