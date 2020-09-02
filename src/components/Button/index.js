import React from "react"
import { useHistory } from "react-router-dom";
// import "./style.css"



export function Button(props) {
    return ( 
        <button 
        className="matchbtn" {...props}>{props.text}
        </button>
    );
};

export function LoginButton(props) {
 
    return (
        <button 
        style={{ float: "left", marginBottom: 10 }} 
        className="btn btn-success" {...props}>
            Log In
        </button>
    );
}

export function SignupButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
            style={{ float: "right", marginBottom: 10 }} 
            className="btn btn-success" 
            onClick={handleClick} >
            Sign Up
        </button>
    );
}
