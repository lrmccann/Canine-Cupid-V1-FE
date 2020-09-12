import axios from "axios";
    
function getToken () {
    let token
    const raw = JSON.parse(localStorage.getItem('user'))
    if (raw) {
    token = raw.sessionToken
    console.log(token)
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

    getUsersById: async function(userData){
        console.log("API.getUsersById was called")
        const token = getToken()
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users/"+userData, 
            { headers: {'session-token': token}}
        );
    },    

    updateUser: async function(userData,userDataName) {
        console.log("API.updateUser was called", userDataName)
        const token = getToken()
        return await axios.put(
            "https://canine-cupid.herokuapp.com/users/"+userDataName, userData,
            { headers: {'session-token': token}}
        );
    },

    getAllUsers: async function(){
        console.log("API.getAllUsers was called")
        const token = getToken()
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users", 
            { headers: {'session-token': token}}
        );
    }
};
