import axios from "axios";
    
function getToken () {
    let token
    const raw = JSON.parse(localStorage.getItem('user'))
    console.log(raw)
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
        // var myJSON = JSON.stringify(userData);
        return await axios.post(
            "https://canine-cupid.herokuapp.com/users", userData
        );
    },

    getUser: async function(userData) {
        console.log("API.getUser was called", userData)
        // var myJSON = JSON.stringify(userData);
        const token = getToken()
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users/"+userData.userName+"/"+userData.password,
            { headers: {'session-token': token}}
        );
    },

    updateUser: async function(userData,userDataName) {
        console.log("API.updateUser was called", userDataName)
        // var myJSON = JSON.stringify(userData);
        const token = getToken()
        return await axios.put(
            "https://canine-cupid.herokuapp.com/users/"+userDataName, userData,
            { headers: {'session-token': token}}
        );
    },

    getAllUsers: async function(){
        console.log("API.getAllUsers was called")
        // const raw = JSON.parse(localStorage.getItem('user'))
        const token = getToken()
        console.log("token",token)
        // console.log(token)
        return await axios.get(
            "https://canine-cupid.herokuapp.com/users", 
            { headers: {'session-token': token}}
        );
    }
};
