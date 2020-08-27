import axios from "axios";

export default {
// Create a User/ Saves a User to the database
    saveUser: function(userData) {
    return axios.post("/api/users/", userData);
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
