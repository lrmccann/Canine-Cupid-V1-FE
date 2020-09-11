import React, { useState, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input } from "../components/Form";
import { SignupButton, LoginButton } from "../components/Button";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { NavbarNolinks } from "../components/Navbar";
import "./Signup.css"
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Modal from "../components/Modal";
import { ModalButton } from "../components/Button";
// import Hero from "../components/Hero";
// import Inputfield from "../components/Inputfield";
// import { List, ListItem } from "../components/List";
// Modals added - change to modal component later
import UserContext from "../utils/UserContext"

function Login() {
  const history = useHistory();

  const [loginObject, setLoginObject] = useState({})
  console.log("state", loginObject);

  const { getData } = useContext(UserContext)
   
////////////// Code for Modal //////
const [isOpen, setIsOpen] = React.useState(false);
const [isErrorMessage, setIsErrorMessage] = React.useState();

const showModal = (errorMsg) => {
  setIsOpen(true);
  setIsErrorMessage(errorMsg);
};

const hideModal = () => {
  setIsOpen(false);
};
///////////////////////////////////

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLoginObject({ ...loginObject, [name]: value })
  };

  async function handleLoginSubmit(event) {
    event.preventDefault();
    if (loginObject.userName && loginObject.password) {
      await API.getUser({
        userName: loginObject.userName,
        password: loginObject.password
      })
        .then(res => handleAuthenticatedResponse(res))
        .catch(error => console.log(error.response));
    }
  };

  function handleAuthenticatedResponse(res) {
    if (res.data === "User not found.") {
      let errorMsg = "User Not Found!";
      showModal(errorMsg);
      // alert("User not found")
    } else if (res.data === "Wrong password.") {
      let errorMsg = "Password is Wrong!";
      showModal(errorMsg);
      // alert("Wrong password.")
    } else {
      console.log("res.data", res.data)
      getData(res.data)
      history.push("/profile");
    }
  }

  return (
    <div>
      <NavbarNolinks />
      <h2 style={{ margin: "4% 0 0 49%" }}>Login</h2>
      <div style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
      <Container fluid>
        <form>
          <div className="loginDetails">
            <div className="content">
              <Row>
                <Col size="md-6">
                  {/* <form> */}
                  <Input
                    onChange={handleInputChange}
                    type="text"
                    size="36"
                    label="User Name: "
                    name="userName"
                    placeholder="User Name (required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    type="password"
                    size="36"
                    label="Password: "
                    name="password"
                    placeholder="Password (required)"
                  />
                  <LoginButton
                    disabled={!(loginObject.userName && loginObject.password)}
                    onClick={handleLoginSubmit}
                  />
                  <SignupButton/>
                  
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

export default Login;
