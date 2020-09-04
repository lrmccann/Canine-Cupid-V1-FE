import React, { useState} from "react";
import API from "../utils/API";
// import Hero from "../components/Hero";
// import Inputfield from "../components/Inputfield";
// import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, Checkbox, TextArea, FormBtn } from "../components/Form";


// // function inputHandler(){
// // 
// // }

// function Signup() {

//   // const [1,2]=setState({
//   // userName
//   // password
//   // })
// ------------------ 
  function Signup() {
    // Setting our component's initial state
    // const [books, setBooks] = useState([])
    // const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({})
    console.log("state",formObject);
  
    // Load all books and store them with setBooks
    // useEffect(() => {
    //   loadBooks()
    // }, [])
  
    // Loads all books and sets them to books
    // function loadBooks() {
    //   API.getBooks()
    //     .then(res => 
    //       setBooks(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //   API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the User data
    // Then reload User from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.userName && formObject.password) {
        // API.saveBook({
          // title: formObject.title,
          // author: formObject.author,
          // synopsis: formObject.synopsis
        API.saveUser({
          password: formObject.password,
          userData: {
              userName: formObject.userName,
              petName: formObject.petName,
              breed: formObject.breed,
              age: formObject.age,
              park: formObject.park,
              ball: formObject.ball,
              frisbee: formObject.frisbee,
              email: formObject.email,
              photoUrl: formObject.photoUrl,
              info: formObject.info
          }
        })
          .then(res => console.log("response",res))
          .catch(error => console.log(error.response));
      }
    };
  
// ------------------  

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-4">
          <form>
              <Input
                onChange={handleInputChange}              
                type="text"
                minLength="6" 
                maxLength="20" 
                size="40"  
                label="User Name: "
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                onChange={handleInputChange}
                type="password" 
                minLength="6" 
                maxLength="20" 
                size="40"
                label="Password: " 
                name="password"
                placeholder="Password (required)"
              />
                <Input
                onChange={handleInputChange}
                type="text"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Your Pet's Name: "
                name="petName"
                placeholder="Your Pet's Name (required)"
              />
               <Input
                onChange={handleInputChange}
                type="email"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Email: "
                name="email"
                placeholder="Email"
              />
                <Input
                onChange={handleInputChange}
                type="text"
                maxLength="50" 
                size="40"  
                label="Your Pet's Breed: "
                name="breed"
                placeholder="Your Pet's Breed"
              />
              <Input
                onChange={handleInputChange}
                type="number"
                maxLength="2" 
                size="40"  
                label="Your Pet's Age: "
                name="age"
                placeholder="Your Pet's Age"
              />

                {/* <Input
                // onChange={handleInputChange}
                type="text"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Your Pet's Interests: "
                name="interests"
                placeholder="Your Pet's Interests"
              /> */}
            </form>
          </Col>
          <Col size="md-4">
            <form>         
              <Input
                onChange={handleInputChange}
                type="text"
                size="40"  
                label="URL to your Pet's Photograph: "
                name="photoUrl"
                placeholder="URL to your Pet's Photograph"
              />
              <p>Your Pet's Interests:</p>
              <Checkbox
                onChange={handleInputChange}
                label="Playing in the Park: "
                name="park"
                // value="false"
              />

              <Checkbox
                onChange={handleInputChange}
                label="Playing with a Ball: "
                name="ball"
                // value="false"
              />

                <Checkbox
                onChange={handleInputChange}
                label="Playing with a Frisbee: "
                name="frisbee"
                // value="false"
              />

              <TextArea
                onChange={handleInputChange}
                // type="textarea"
                // id="info"            
                // size="40"  
                label="Additional Information about your Pet: "
                // label for="info"
                name="info"
                rows="8"
                placeholder="Additional Information about your Pet"
              />
              <FormBtn
                disabled={!(formObject.userName && formObject.password)}
                onClick={handleFormSubmit}
              >
                Save
              </FormBtn>
            </form>
          </Col>
        </Row> 
      </Container>
    </div>
  );
}

export default Signup;

   