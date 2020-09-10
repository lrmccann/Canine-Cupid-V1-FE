import React from "react";

const UserContext = React.createContext(
    // {
    //     user: "dima",
    //     getUser: () => {}
    // sessionToken: "",
    // userName:  "",
    // petName:  "",
    // breed: "",
    // age: "",
    // park: "",
    // ball: "",
    // frisbee: "",
    // email: "",
    // photoUrl: "",
    // info: "",
    // date: ""
// }
);

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer


export default UserContext;
