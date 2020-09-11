import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, Checkbox, TextArea, FormBtn } from "../components/Form";
import Navbar from "../components/Navbar";
import "./Signup.css"
import UserContext from "../utils/UserContext";


// ------------------ 
  function EditProfile() {
    const { user } = useContext(UserContext)
    console.log("user", user)

    // Setting our component's initial state
    // const [books, setBooks] = useState([])
    // const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({})
    console.log("state",formObject);
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the User data
    // Then reload User from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log("user.userData.userName",user.userName) 
          API.updateUser({
            userData: formObject
        },user.userName)
          .then(res => console.log("response",res))
          .catch(error => console.log(error.response));   
    };
  
// ------------------  

    return (
      <div>
        <Navbar />
        <h2 style={{ margin: "0 0 0 47%" }}>Edit  Profile</h2>
        <div style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
        <Container fluid>
          <form>
              <div className="userDetails">
              <div className="content">
                <Row>
                  <h3>Your Details:</h3>
                  <Col size="md-4">
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.userName}
                      type="text"
                      minLength="6"
                      maxLength="30"
                      size="40"
                      label="User Name (Required): "
                      name="userName"
                      placeholder="User Name (required)"
                      disabled
                    />
                    {/* <Input
                      onChange={handleInputChange}
                     
                      type="password"
                      minLength="8"
                      maxLength="30"
                      size="40"
                      label="Password (Required): "
                      name="password"
                      placeholder="Password (required)"

                    /> */}
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.email}
                      type="email"
                      // minlength="6" 
                      // maxlength="30" 
                      size="40"
                      label="Email: "
                      name="email"
                      placeholder="Email"
                    />
                  </Col>
                  <Col size="md-4">
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.zipcode}
                      type="number"
                      // minlength="6" 
                      // maxlength="30" 
                      size="10"
                      label="Zipcode: "
                      name="zipcode"
                      placeholder="Zipcode"
                    />
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.city}
                      type="text"
                      // minlength="6" 
                      // maxlength="30" 
                      size="40"
                      label="City: "
                      name="city"
                      placeholder="City"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            
            <div className="petDetails">
              <div className="content">
                <Row>
                  <h3>Your Pet's Details:</h3>
                  <Col size="md-4">
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.petName}
                      type="text"
                      // minlength="6" 
                      // maxlength="30" 
                      size="40"
                      label="Your Pet's Name (Required): "
                      name="petName"
                      placeholder="Your Pet's Name (required)"
                    />
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.breed}
                      type="text"
                      maxLength="50"
                      size="40"
                      label="Your Pet's Breed: "
                      name="breed"
                      placeholder="Your Pet's Breed"
                    />
                    <Input
                      onChange={handleInputChange}
                      defaultValue = {user.age}
                      type="number"
                      maxLength="2"
                      size="40"
                      label="Your Pet's Age: "
                      name="age"
                      placeholder="Your Pet's Age"
                    />
                    <Input
                      onChange={handleInputChange}
                      type="text"
                      size="40"
                      label="URL to your Pet's Photograph: "
                      name="photoUrl"
                      placeholder="URL to your Pet's Photograph"
                    />
                  </Col>
                  <Col size="md-4">
                    <p>Your Pet's Interests:</p>
                    <Checkbox
                      onChange={handleInputChange}
                      label="Playing in the Park:  "
                      name="park"
                    // value="false"
                    />
                    <Checkbox
                      onChange={handleInputChange}
                      label="Playing with a Ball:  "
                      name="ball"
                    // value="false"
                    />
                    <Checkbox
                      onChange={handleInputChange}
                      label="Playing with a Frisbee:  "
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
                     </Col>
                    </Row>
                    <Row>
                    <Col size="md-4">
                    <FormBtn 
                      // disabled={!(formObject.userName && formObject.password)}
                      onClick={handleFormSubmit}
                    >
                    Save Changes
                    </FormBtn>      
                  </Col>
                </Row>
              </div>
            </div>

          </form>
        </Container>

      </div>
    );
  }

export default EditProfile;

   