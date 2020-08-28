import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Inputfield from "../components/Inputfield";
// import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, Checkbox, TextArea, FormBtn } from "../components/Form";


// function inputHandler(){
// 
// }

function Signup() {

  // const [1,2]=setState({
  // userName
  // password
  // })

  return (
    <div>
      {/* <Hero/> */}
      {/* <Jumbotron> */}
        <h2>Sign Up Page</h2>
      {/* </Jumbotron> */}

      <Container fluid>
        <Row>
        <form>
              <Input
                // onChange={handleInputChange}
                type="text"
                minlength="6" 
                maxlength="20" 
                size="40"  
                label="User Name: "
                name="userName"
                placeholder="User Name (required)"
              />
              <Input
                // onChange={handleInputChange}
                type="password" 
                minlength="6" 
                maxlength="20" 
                size="40"
                label="Password: " 
                name="password"
                placeholder="Password (required)"
              />
               <Input
                // onChange={handleInputChange}
                type="email"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Email: "
                name="email"
                placeholder="Email"
              />
                <Input
                // onChange={handleInputChange}
                type="text"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Your Pet's Name: "
                name="petName"
                placeholder="Your Pet's Name (required)"
              />
                <Input
                // onChange={handleInputChange}
                type="text"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Your Pet's Breed: "
                name="breed"
                placeholder="Your Pet's Breed"
              />
                <Input
                // onChange={handleInputChange}
                type="number"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="Your Pet's Age: "
                name="age"
                placeholder="Your Pet's Age"
              />
            
                <Input
                // onChange={handleInputChange}
                type="text"
                // minlength="6" 
                // maxlength="30" 
                size="40"  
                label="URL to your Pet's Photograph: "
                name="photoUrl"
                placeholder="URL to your Pet's Photograph"
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
                
                <p>Your Pet's Interests:</p>
                <Checkbox
                // onChange={handleInputChange}
                label="Playing in the Park: "
                name="park"
                value="park"
              />

                <Checkbox
                // onChange={handleInputChange}
                label="Playing with a Ball: "
                name="ball"
                value="ball"
              />

                <Checkbox
                // onChange={handleInputChange}
                label="Playing with a Frisbee: "
                name="frisbee"
                value="frisbee"
              />

                <TextArea
                // onChange={handleInputChange}
                // type="textarea"
                // id="info"            
                // minlength="6" 
                // maxlength="30" 
                // size="40"  
                label="Additional Information about your Pet: "
                // label for="info"
                name="info"
                rows="8"
                placeholder="Additional Information about your Pet"
              />
             
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                // onClick={handleFormSubmit}
              >
                Save
              </FormBtn>
            
            </form>
        </Row> 
      </Container>
    </div>
  );
}

export default Signup;

   