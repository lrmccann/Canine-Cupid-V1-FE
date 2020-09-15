import React, { useContext }  from "react";
import UserContext from "../utils/UserContext";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import ProfDetails from "../components/ProfDetails";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import { EditProfileButton } from "../components/Button";
import Map from "../components/map";
import Moment from 'react-moment';

let Profile = () => {
    const { user } = useContext(UserContext)
    console.log("user profile page",user);

    let interests="";
    if ('park' in user && user.park === "on")
    {
        interests = interests + "Playing in the Park. "
    }
    if ('ball' in user && user.ball === "on"){
        interests = interests + "Playing with a ball. "
    }
    if ('frisbee' in user && user.frisbee === "on"){
        interests = interests + "Playing with a frisbee. "
    }


    let readableDate = <Moment format="YYYY/MM/DD">{user.date}</Moment>

    return (
        <div>
            <Navbar />
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 35.5%" }}>Welcome to your profile {user.userName}!</h2>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
            <Container fluid>
                <Row-fluid>
                    <Col size="md-12">                        
                        <Card petName={user.petName} photoUrl={user.photoUrl}>
                        <div style={{marginTop:"1%", marginLeft:"5%"}}>Pet name: &nbsp;{user.petName}</div> 
                        <div style={{marginTop:"5%", marginLeft:"5%"}}>Breed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.breed}</div> 
                        <div style={{marginTop:"5%", marginLeft:"5%"}}>Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.age}</div>
                        </Card>
                    </Col>
                </Row-fluid>
                <Row>
                    <Col size="md-11">
                    <ProfDetails>
                    <div>User Name : {user.userName} </div>
                    <div style={{paddingTop: "3%"}} >Location: &nbsp;&nbsp;&nbsp;&nbsp;{user.city}</div>
                    <div style={{paddingTop: "3%"}}>Zip Code: &nbsp;&nbsp;&nbsp;&nbsp;{user.zipCode} </div>
                    <div style={{paddingTop: "3%"}}>Join Date: &nbsp;&nbsp;&nbsp;{readableDate}</div>
                    <div style={{paddingTop: "3%"}}>About my pet: &nbsp;&nbsp;{user.info}</div>
                    <EditProfileButton/>
                    </ProfDetails>
                    </Col>
                </Row>
                 <Col size="md-12">
                    <h1 className="mapText" style={{marginTop:"7.5%", marginLeft: "33.5%"}}>Pet-friendly parks near you</h1>
                    <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
                </Col>
                <Map />
            </Container>
        </div>
    )
}

export default Profile;