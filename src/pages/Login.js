import React, { useState } from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Inputfield from "../components/Inputfield";
// import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { SignupButton } from "../components/Button";
import API from "../utils/API";


// function inputHandler(){
// 
// }

function Login() {

  const [loginObject, setLoginObject] = useState({})
  console.log("state",loginObject);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLoginObject({...loginObject, [name]: value})
  };

  function handleLoginSubmit(event) {
    event.preventDefault();
    if (loginObject.userName && loginObject.password) {
      // API.saveBook({
        // title: formObject.title,
        // author: formObject.author,
        // synopsis: formObject.synopsis
      API.getUser({
        userName: loginObject.userName,
        password: loginObject.password
      })
        .then(res => console.log("response",res))
        .catch(error => console.log(error.response));
    }
  };

  return (
    <div>
      {/* <Hero/> */}
      {/* <Jumbotron> */}
        <h1>Login Page</h1>
      {/* </Jumbotron> */}

      <Container fluid>
        <Row>
        <form>
              <Input
                onChange={handleInputChange}
                type="text"
                minLength="6" 
                maxLength="20" 
                size="36"  
                label="User Name: "
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                onChange={handleInputChange}
                type="password" 
                minLength="6" 
                maxLength="20" 
                size="36"
                label="Password: " 
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                // onClick={handleFormSubmit}
              >
                Log In
              </FormBtn>
                
              <SignupButton
                disabled={!(loginObject.userName && loginObject.password)}
                onClick={handleLoginSubmit}
                />
        
            </form>

          {/* <Col size="md-12">
            <Inputfield 
            label="User Name: " 
            placeholder="User Name" 
            type="text" 
            minlength="6" 
            maxlength="20" 
            size="36"
            // inputHandler = this.inputHandler
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Inputfield 
              label="Password: " 
              placeholder="Password" 
              type="password" 
              minlength="6" 
              maxlength="20" 
              size="36"
              // inputHandler = this.inputHandler
              />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Button 
            class="btn btn-primary" 
            type="button">
            Log In</Button>
          </Col>
          <Col size="md-6">
          <Button 
            class="btn btn-primary" 
            type="button">
            Sign Up</Button>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Login;
