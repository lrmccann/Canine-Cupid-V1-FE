import React, { useState } from "react";
import "./style.css";



function SwipeBtn (props) {
    const [size] = useState(props.size);
    const [variant] = useState(props.variant);
    const [direction] = useState(props.direction);

    return (
    <button
    className={`btn-${size} btn-${variant}`}{...props}
    >
        <div 
        className={`arrow-${direction}`}
        >            
        </div>
    </button>
    );
}

export default SwipeBtn;