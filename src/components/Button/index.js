import React, { useContext, useEffect } from "react"
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
        <button style={{marginLeft:"22%"}}
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
        
    async function getUserData (firstUser) {
        console.log ("getNewUser",firstUser)
        await API.getUserByName(firstUser)
        // .then(response=>console.log(response))
        .then((response) =>{
            getNewUserData(response.data); 
            getNewUserName(response.data.userName)
            history.push("/matchnow")
        }) 
    }

    function handleClick() {
        const rand = function (items) {
            return items[~~(items.length * Math.random())];
        }
        const firstUser = rand(allUsersNames)
        getUserData(firstUser)
        // .then(history.push("/matchnow"));
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
    const {userForMatchesPage, getAllMatchesForMatchesPage, user} = useContext(UserContext)
    const history = useHistory();
    let newVar = user
    const getUserDataById = async () => {
        await API.getMatchesByName(newVar.userName)
        .then(response => getAllMatchesForMatchesPage(response.data))
        
    }
    async function handleClick(user) {
        console.log(userForMatchesPage, "anytext")
        await getUserDataById(user)
        .then(history.push("/matches"))
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
    const { user, getData } = useContext(UserContext)
    const history = useHistory();

    useEffect(
        ()=>{localStorage.setItem('user', JSON.stringify(user));
      }, [])

    function handleClick() {
        getData("")
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