import React, { useContext, useEffect, useState } from "react";
import { Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import Col from "../components/Col";
import MatchCards from "../components/MatchCards";
import { MessageButton } from "../components/Button";
import "../components/MatchCards/images/small-profile-pic-one.png";
import Map from "../components/map";
import UserContext from "../utils/UserContext";
import API from "../utils/API";


function Matches() {
  const { user , userForMatchesPage } = useContext(UserContext)
  const [finalUser, setFinalUser] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)
  console.log("userForMatchesPage" , userForMatchesPage)

useEffect(()=>{
  if(userForMatchesPage.length === null){
    setIsLoading(true)
  }if(userForMatchesPage.length > 0){
    setIsLoading(false)
    setFinalUser(userForMatchesPage)
    console.log("I have loaded", finalUser)
  }
},[isLoading , userForMatchesPage.length]
)
  if(isLoading){
    return (
      <div>
      <Navbar />
    <div>Loading</div>
    </div>
    )
  }
  if(!isLoading){
    return (
      <div>
        <Navbar />
        <h2 style={{ margin: "0 0 0 38%" }}>{user.userName}'s Matches</h2>
        <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
        <Container fluid style={{ margin: "0 0 0 0" }}>
          <Row>
            <Col size="md-12">
              <MatchCards
                arrayData={finalUser}
                message={"You have a new message waiting from  "}
                image="https://cdn.iconscout.com/icon/free/png-256/user-avatar-contact-portfolio-personal-portrait-profile-6-5623.png"
                {...MessageButton}
              />
            </Col>
      </Row>
            <h3 style={{marginTop: "5%", marginLeft:"32.5%"}}>Meet up at a pet-friendly park near you</h3>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
      <Map />
    </Container>
    </div>
    ); 
      }
      }

  

export default Matches;