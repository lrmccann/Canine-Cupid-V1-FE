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
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 37%" }}>Welcome to your profile {user.userName}!</h2>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
            <Container fluid>
                <Row-fluid>
                    <Col size="md-12">                        
                        <Card petName={user.petName} photoUrl={user.photoUrl}>
                        <div>Pet name: &nbsp;{user.petName}</div> 
                        <div>Breed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.breed}</div> 
                        <div>Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.age}</div>
                        <div>Interests: &nbsp;&nbsp;{interests}</div>
                        </Card>
                    </Col>
                </Row-fluid>
                <Row>
                    <ProfDetails>
                    <div>Location: &nbsp;&nbsp;&nbsp;&nbsp;{user.city}</div>
                    <div>Zip Code: &nbsp;&nbsp;&nbsp;&nbsp;{user.zipCode} </div>
                    <div>Join Date: &nbsp;&nbsp;&nbsp;{readableDate}</div>
                    <div>About my pet: &nbsp;&nbsp;{user.info}</div>
                    </ProfDetails>
                </Row>
                
                <EditProfileButton
                />
                <h1 style={{fontFamily: "Georgia, serif", marginTop: "12%", marginLeft: "34%"}}>Pet friendly parks near you: </h1>
                <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%", marginTop: "5%" }}></div>
                <Map />
            </Container>
        </div>
    )
}

export default Profile;