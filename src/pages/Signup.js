import React, { setState, useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import API from "../utils/API";
import UserContext from "../utils/UserContext"
import { Col, Row, Container } from "../components/Grid";
import { Input, Checkbox, TextArea, FormBtn } from "../components/Form";
import Navbar from "../components/Navbar";
import { ModalButton } from "../components/Button";
import "./Signup.css"

// ------------------ 
  function Signup() {

    const { getData } = useContext(UserContext)

    const history = useHistory();

   
  
    // When the form is submitted, use the API.saveUser method to save the User data
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.userName && formObject.password && formObject.petName && formObject.email) {
          API.saveUser({
          password: formObject.password,
          userData: {
              userName: formObject.userName,
              petName: formObject.petName,
              zipcode: formObject.zipcode,
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



 ///////////////////////
 const [formerrors, setFormErrors] = useState({})
  // errors: {
  //   userName: '',
  //   petName: ''
    // email: '',
    // password: '',
  // }
// })
//////////////////////
// console.log("formerrors",formerrors);

    const [formObject, setFormObject] = useState({})
    console.log("formObject",formObject);
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      event.preventDefault();
      const { name, value } = event.target;
  ///////////////////////    
  switch (name) {
    case 'userName': 
      // errors.userName = 
        if (value.length < 5){
          console.log("User Name less then 5")
          setFormErrors({...formerrors, [name]: 'User Name must be 5 characters long!'})
        }


        // value.length < 5
        //   ? setFormErrors({...formerrors, [name]: 'User Name must be 5 characters long!'})
        //   : setFormErrors({...formerrors, [name]: ''});
      break;
      // case 'petName': 
      // errors.petName = 
      //   value.length < 3
      //     ?  setErrors('Pet Name must be 3 characters long!')
      //     :  setErrors('');
      // break;
    // case 'email': 
    //   errors.email = 
    //     validEmailRegex.test(value)
    //       ? ''
    //       : 'Email is not valid!';
    //   break;
    // case 'password': 
    //   errors.password = 
    //     value.length < 8
    //       ? 'Password must be 8 characters long!'
    //       : '';
    //   break;
    default:
      break;
  }

  // this.setState({errors, [name]: value}, ()=> {
      
  // })
  ///////////////////////    
      setFormObject({...formObject, [name]: value})
    };




    // ------------------  

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
                      label="Email: "
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
            
            <div className="petDetails">
              <div className="content">
                <Row>
                  <h3>Your Pet's Details:</h3>
                  <Col size="md-4">
                    <Input
                      onChange={handleInputChange}
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
                      {/* <button>Save</button> */}
                    </Modal.Footer>
                  </Modal>
            {/* ------------------------------------ */}
                  {/* </form> */}

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

   