import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Inputfield from "../components/Inputfield";
// import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";


// function inputHandler(){
// 
// }

function Login() {

  // const [1,2]=setState({
  // userName
  // password
  // })

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
                // onChange={handleInputChange}
                type="text"
                minlength="6" 
                maxlength="20" 
                size="36"  
                label="User Name: "
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                // onChange={handleInputChange}
                type="password" 
                minlength="6" 
                maxlength="20" 
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
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                // onClick={handleFormSubmit}
              >
                Sign Up
              </FormBtn>
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
