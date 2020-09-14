import React from "react";
import Col from "../Col"
import "./style.css"

function ProfDetails(props){

    return (
        <Col size ="md-12">
            <div className="profDetails">
                <div className="content">
                    <h2>Profile Details</h2>
                    <div className="line"></div>
                    <h4 className="contentOne">{props.children}</h4>
                </div>
            </div>
        </Col>
    );
}
export default ProfDetails;