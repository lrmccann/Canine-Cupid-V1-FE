import React from "react"

function Button (props) {
    return ( 
        <div className={`btn${props.btn}`} {...props}>{props.children}</div>
    );
};

export default Button