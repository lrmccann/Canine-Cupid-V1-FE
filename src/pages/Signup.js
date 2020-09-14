import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import UserContext from "../utils/UserContext"
import { Col, Row, Container } from "../components/Grid";
import { Input, Checkbox, TextArea, FormBtn } from "../components/Form";
import Navbar from "../components/Navbar";
import Modal from 'react-bootstrap/Modal';
import { ModalButton } from "../components/Button";
import "./Signup.css"

function Signup() {
  const { getData } = useContext(UserContext)
  const history = useHistory();
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
  // When the form is submitted, use the API.saveUser method to save the User data
  function handleFormSubmit(event) {
    event.preventDefault();
  function Signup() {

    const { getData } = useContext(UserContext)
    const history = useHistory();
    let errorMsg = "";
   
    // When the form is submitted, use the API.saveUser method to save the User data
   async function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.userName && formObject.password && formObject.petName && formObject.email) {
         await API.saveUser({
          password: formObject.password,
          userData: {
              userName: formObject.userName,
              petName: formObject.petName,
              zipCode: formObject.zipcode,
              city: formObject.city,
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
          .then(res => handleSignupResponse(res))
          .catch(error => console.log(error.response));
      }
    };
      // Then alert the User if the User name had been taken otherwise update Context with new User data
    function handleSignupResponse(res) {
      if (res.data === "User name already taken.") {
        let errorMsg = res.data;
        showModal(errorMsg);
      } else {        
        // if ( (!('userName' in formObject) || (formObject.userName.length === 0)) || (!('password' in formObject) || (formObject.password.length === 0)) || (!('email' in formObject) || (formObject.email.length === 0)) || (!('petName' in formObject) || (formObject.petName.length === 0)))
        console.log("start")
        console.log("len",formObject.breed, typeof(formObject.breed))
        // console.log("breed", breed.value)
        let breedValid = 'breed' in formObject && (formObject.breed.length > 0 && formObject.breed.length < 9)
        let emailValid = 'email' in formObject && formObject.email.length > 0
        let fieldsValid = breedValid && emailValid
        console.log("abc",formObject, 'breed' in formObject)
        if (!fieldsValid) 
        // if (formObject.breed === undefined)        
        // if (typeof(formObject.breed) == 'undefined')
        {
          let errorMsg = "Please fill all the required fields i.e. Username, Password, Email and Petname";
          alert(errorMsg)
          showModal(errorMsg);
        }
       
    
    let formValid = formFrontendValidations();
    console.log("formValid", formValid)
    // if (formObject.userName && formObject.password && formObject.petName && formObject.email) {
    if (formValid === true) {
      API.saveUser({
        password: formObject.password,
        userData: {
          userName: formObject.userName,
          petName: formObject.petName,
          zipCode: formObject.zipCode,
          city: formObject.city,
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
        .then(res => handleSignupResponse(res))
        .catch(error => console.log(error.response));
    }
  };

  //--------------------------
  function formFrontendValidations(formValid) { 
    let validEmailFormat = validEmailRegex.test(formObject.email)
    let userNameValid = 'userName' in formObject && (formObject.userName.length > 5 && formObject.userName.length < 21)
    let passwordValid = 'password' in formObject && (formObject.password.length > 5 && formObject.password.length < 21)
    let emailValid = 'email' in formObject && formObject.email.length > 0 && validEmailFormat
    let petNameValid = 'petName' in formObject && formObject.petName.length > 0    
 
    console.log("valids", userNameValid, passwordValid, emailValid, petNameValid) 
    let fieldsValid = userNameValid && passwordValid && emailValid && petNameValid

    if (!fieldsValid) {
      let errorMsg = "Please fill ALL the required fields correctly i.e. Username (5-20 characters) , Password (5-20 Characters) , Email (in valid @format) and Petname (required)";
      showModal(errorMsg);
      return false
    }
    else {
      return true
    }
  }
  //-------------------------- 

  // Then alert the User if the User name had been taken otherwise update Context with new User data
  function handleSignupResponse(res) {
    console.log("res.data", res.data)
    if (res.data === "User name already taken.") {
      let errorMsg = res.data;
      showModal(errorMsg);
    } else {
      console.log("res.data", res.data)
      getData(res.data)
      history.push("/profile");
    };
  };

  ////////////// Code for Modal //////
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState();

  const showModal = (errorMsg) => {
    setIsOpen(true);
    setIsErrorMessage(errorMsg);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  ///////////////////////////////////

  const [formObject, setFormObject] = useState({})
  console.log("formObject", formObject);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ fontFamily: "Georgia, serif" , margin: "0 0 0 48%" }}>Sign Up</h2>
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
                    type="text"
                    minLength="5"
                    maxLength="20"
                    size="40"
                    label="User Name (Required): "
                    name="userName"
                    placeholder="User Name (5-20 characters required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    type="password"
                    minLength="5"
                    maxLength="20"
                    size="40"
                    label="Password (Required): "
                    name="password"
                    placeholder="Password (5-20 characters required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    type="email"
                    size="40"
                    label="Email (Required):"
                    name="email"
                    placeholder="Email (Required and in email format)"
                  />
                </Col>
                <Col size="md-4">
                  <Input
                    onChange={handleInputChange}
                    type="number"
                    size="10"
                    label="Zipcode: "
                    name="zipCode"
                    placeholder="Zipcode"
                  />
                  <Input
                    onChange={handleInputChange}
                    type="text"
                    size="40"
                    label="City: "
                    name="city"
                    placeholder="City"
                  />
                </Col>
              </Row>
    return (
      <div>
        <Navbar />
        <h2 style={{ margin: "0 0 0 48%" }}>Sign Up</h2>
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
                      type="text"
                      minLength="6"
                      maxLength="30"
                      size="40"
                      label="User Name (Required): "
                      name="userName"
                      placeholder="User Name (required)"
                    />
                    <Input
                      onChange={handleInputChange}
                      type="password"
                      minLength="8"
                      maxLength="30"
                      size="40"
                      label="Password (Required): "
                      name="password"
                      placeholder="Password (required)"
                    />
                    <Input
                      onChange={handleInputChange}
                      type="email"
                      // minlength="6" 
                      // maxlength="30" 
                      size="40"
                      label="Email (Required): "
                      name="email"
                      placeholder="Email (required)"
                    />
                  </Col>
                  <Col size="md-4">
                    <Input
                      onChange={handleInputChange}
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
          </div>

          <div className="petDetails">
            <div className="content">
              <Row>
                <h3>Your Pet's Details:</h3>
                <Col size="md-4">
                  <Input
                    onChange={handleInputChange}
                    type="text"
                    size="40"
                    label="Your Pet's Name (Required): "
                    name="petName"
                    placeholder="Your Pet's Name (Required)"
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
                    maxLength="3"
                    size="40"
                    label="Your Pet's Age: "
                    name="age"
                    placeholder="Your Pet's Age"
                  />
                  <Input
                    onChange={handleInputChange}
                    type="text"
                    size="200"
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
                    name="info"
                    rows="8"
                    placeholder="Additional Information about your Pet"
                  />
                </Col>
              </Row>
              <Row>
                <Col size="md-4">
                  <FormBtn
                    disabled={!(formObject.userName && formObject.password && formObject.petName && formObject.email)}
                    onClick={handleFormSubmit}
                  >
                    Save Profile
                    </FormBtn>

                  {/* ----------------------Rendering Modal */}
                  <Modal className="my-modal" show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                      <Modal.Title>Sorry!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{isErrorMessage}</Modal.Body>
                    <Modal.Footer>
                      <ModalButton onClick={hideModal}>Ok</ModalButton>
                    </Modal.Footer>
                  </Modal>
                  {/* ------------------------------------ */}
                </Col>
              </Row>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Signup;

