import React from "react"
import "./style.css"



function Button (props) {
    return ( 
        <button className="matchbtn" {...props}>{props.text}</button>
    );
};

export default Button