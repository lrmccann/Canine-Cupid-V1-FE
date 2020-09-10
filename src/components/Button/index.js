import React from "react"
import { useHistory } from "react-router-dom";
import "./style.css";

export function Button(props) {
    return ( 
        <button
            className="matchbtn" {...props}>{props.text}
        </button>
    );
};

export function MessageButton(props) {
    return ( 
        <button
            className="messagebutton" {...props.children}>{props.text}
        </button>
    );
};

export function ModalButton(props) {
    return ( 
        <button
            className="appbtnpink" {...props}>
            Ok
        </button>
    );
};

export function LoginButton(props) {
    return (
        <button 
        style={{ float: "left", marginBottom: 10 }} 
        className="appbtnblue"
        {...props}>
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
            className="appbtnblue"
            onClick={handleClick} >
            Sign Up
        </button>
    );
}

export function EditProfileButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/signup");
    }
    return (
        <button 
            // style={{ float: "right", marginBottom: 10 }} 
            // className="btn btn-success" 
            className="appbtnpink"
            onClick={handleClick} >
            Edit Profile
        </button>
    );
}

export function MyProfileButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/profile");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
            My Profile
        </button>
    );
}

export function MatchNowButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/matchnow");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
            Match Now
        </button>
    );
}

export function MatchesButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/matches");
    }
    return (
    <button 
    className="btn" 
    onClick={handleClick} >
        Matches
    </button>
    );
}

export function LogOutButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/login");
    }
    return (
        <button 
        className="btn" 
        onClick={handleClick} >
            Log Out
        </button>
    );

}