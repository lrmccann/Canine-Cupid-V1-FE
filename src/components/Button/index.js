import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext"
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

export function SignupButton(props) {
    return (
        <button 
            className="appbtnblue"
            {...props}
            >
            Sign Up
        </button>
    );
}

export function EditProfileButton() {
    const history = useHistory();
    function handleClick() {
        history.push("/editprofile");
    }
    return (
        <button 
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
    const { allUsersNames, getNewUserData, getNewUserName } = useContext(UserContext)
    const history =  useHistory();
        
    async function getUserData (name) {
        console.log ("getNewUser",name)
        await API.getUserByName(name)
        // .then(response=>console.log(response))
        .then((response) =>{
            getNewUserData(response.data); 
            getNewUserName(response.data.userName)
        }) 
    }

    async function handleClick() {
        await getUserData(allUsersNames[0])
        .then(history.push("/matchnow"));
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