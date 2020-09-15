import axios from "axios";
    
function getToken () {
    let token
    const raw = JSON.parse(localStorage.getItem('user'))
    if (raw) {
    token = raw.sessionToken
    } else {
    token = ""
    }
    return token
}

export default {
   
    // Create a User/ Saves a User to the database
    saveUser: async function(userData) {
        console.log("API.saveUser was called", userData)
        return await axios.post(
            "https://canine-cupid.herokuapp.com/users", userData
        );
    },
    
    // Checking user credential to log in
    checkUser: async function(userData) {
        console.log("API.getUser was called", userData)
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users/"+userData.userName+"/"+userData.password
        );
    },

    getUserByName: async function(userData){
        console.log("API.getUserById was called", userData)
        const token = getToken()
        console.log("token",token)
        return await axios.get(
            "https://canine-cupid.herokuapp.com/user/"+userData, 
            { headers: {'session-token': token}}
        );
    },    

    updateUser: async function(userData,userDataName) {
        console.log("API.updateUser was called", userDataName)
        const token = getToken()
        return await axios.put(
            "https://canine-cupid.herokuapp.com/user/"+userDataName, userData,
            { headers: {'session-token': token}}
        );
    },
    // getting All Names as an array
    getAllUsers: async function(sessionToken){
        console.log("API.getAllUsers was called", sessionToken)
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users", 
            { headers: {'session-token': sessionToken}}
        );
    },

    getMatchesByName: async function(userData) {
        console.log("API.getMatchesByName was called", userData)
        const token = getToken()
        // console.log("token",token)
        return await axios.get(
            "https://canine-cupid.herokuapp.com/usersallmatches/"+userData,
            { headers: {'session-token': token}}
        );
    },

    setUsersMatches: async function(userData1,userData2) {
        console.log("API.setUsersMatches was called", userData1, userData2)
        // const token = getToken()
        // console.log("token",token)
        return await axios.put(
            "https://canine-cupid.herokuapp.com/usersmatches/"+userData1+"/"+userData2
            //, { headers: {'session-token': token}}
        );
    }

};
