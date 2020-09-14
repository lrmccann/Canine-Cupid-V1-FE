import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import Col from "../components/Col";
import MatchCards from "../components/MatchCards";
import { MessageButton } from "../components/Button";
import "../components/MatchCards/images/small-profile-pic-one.png";
import Map from "../components/map";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import { resolve } from "path";


function Matches() {
  const { user } = useContext(UserContext)
  const [finalUser, setFinalUser] = useState({}) 
  const [isLoading, setIsLoading] = useState(true)
  console.log(finalUser)
  console.log(user.userName)

  useEffect(() => {
    const getUserDataById = async () => {
      await API.getMatchesByName(user.userName)
      .then(response => setFinalUser(response))
      .then(response => console.log(response))
      .catch(err => console.log(err))
      setIsLoading(false)
    }
    getUserDataById();
  },[user.userName]
  )
    if(isLoading){
      return <div>Loading</div>
    }else{
      return (
        <div>
          <Navbar />
            <h2 style={{ margin: "0 0 0 38%" }}>{user.userName}'s Matches</h2>
          <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
          <Container fluid style={{ margin: "0 0 0 0" }}>
            <Row>
              <Col size="md-12">
                <MatchCards
                  props={finalUser}
                  message={"You have a new message waiting from  "}
                  image="https://cdn.iconscout.com/icon/free/png-256/user-avatar-contact-portfolio-personal-portrait-profile-6-5623.png"
                  {...MessageButton}
                />
              </Col>
             
                </Row>
            <Row>
              <Col size="md-12">
                <MatchCards
                  props={finalUser}
                  message={"You have a new message waiting from  "}
                  image="https://i.vippng.com/png/small/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png"
                  {...MessageButton}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <MatchCards
                props={finalUser}
                message={"You have a new message waiting from  "}
                image="data:image/png;base64,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"
                  {...MessageButton}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <MatchCards
                props={finalUser}
                message={"You have a new message waiting from  "}
                image="https://www.bbb.org/ProfileImages/e064c77a-4aca-4a2a-b50d-20a13d7fae15.jpeg"
                  {...MessageButton}
                />
              </Col>
  return (
    <div>
      <Navbar />
      <h2 style={{ fontFamily: "Georgia, serif" , margin: "0 0 0 36%" }}>Your Matches - Meet pleasant pups nearby</h2>
      <div className="line" style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
      <Container fluid style={{ margin: "0 0 0 0" }}>
        <Row>
          <Col size="md-12">
            <MatchCards
              img="data:image/png;base64,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"
              userName="Lrmccann"
              messages="Hey, had to message you and let you know, Gordon is such a cutie!"
            />
          </Col>
         
            </Row>
            <Row>
              <Col size="md-12">
                <MatchCards
                props={finalUser}
                message={"You have a new message waiting from  "}
                image="https://avatars.services.sap.com/images/former.member_small.png"
                  {...MessageButton}
                />
              </Col>
              
            </Row>
          </Container>
         
        </div>
            />
          </Col>
          
        </Row>
        <h6>&nbsp;&nbsp; Meet at a Park near your location - See map below</h6>
        <Map />
      </Container>
     
      ); 
    }

  }
  

export default Matches;