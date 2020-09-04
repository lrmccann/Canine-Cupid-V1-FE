import axios from "axios";

export default {
// Create a User/ Saves a User to the database
saveUser: async function(userData) {
    console.log("API.saveUser was called", userData)
    // var myJSON = JSON.stringify(userData);
return await axios.post("https://canine-cupid.herokuapp.com/users", userData);
},

getUser: async function(userData) {
console.log("API.getUser was called", userData)
    // var myJSON = JSON.stringify(userData);
return await axios.get("https://canine-cupid.herokuapp.com/users/"+userData.userName+"/"+userData.password);
}
// Gets the User with the given id
//     getUser: function(id) {
//     return axios.get("/api/users/" + id);
//   },
// Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },

//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
