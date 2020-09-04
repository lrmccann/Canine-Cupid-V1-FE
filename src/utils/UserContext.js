import React from "react";

const UserContext = React.createContext({
    sessionToken: "",
    userName:  "",
    petName:  "",
    breed: "",
    age: "",
    park: "",
    ball: "",
    frisbee: "",
    email: "",
    photoUrl: "",
    info: "",
    date: ""
});

export default UserContext;
