import React, { useContext }  from "react";
import UserContext from "../utils/UserContext";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import ProfDetails from "../components/ProfDetails";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import { EditProfileButton } from "../components/Button";
import Map from "../components/map";

let Profile = () => {
    const { user } = useContext(UserContext)

    let readableDate = new Date(user.date).toDateString();

    return (
        <div>
            <Navbar />
            <h1 style={{margin: "0 0 0 27%" }}>Welcome to your profile {user.userName}!</h1>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
            <Container fluid>
                <Row-fluid>
                    <Col size="md-12">
                        <Card petName={user.petName} photoUrl={user.photoUrl}>
                        <div>Pet name: {user.petName}</div> 
                        <div>Breed: {user.breed}</div> 
                        <div>Age: {user.age}</div>
                        </Card>
                    </Col>
                </Row-fluid>
                <Row>
                    <ProfDetails>
                    <div>Location: {user.city}</div>
                    <div>Zip Code: {user.zipCode} </div>
                    <div>About pet: {user.info}</div>
                    <div>Join Date: {readableDate}</div>
                    </ProfDetails>
                </Row>
                
                <EditProfileButton
                //  onClick={handleEditSubmit}
                />
                <h1 style={{marginTop: "12%", marginLeft: "34%"}}>Pet friendly parks near you: </h1>
                <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%", marginTop: "5%" }}></div>
                <Map />
            </Container>
        </div>
    )

}


export default Profile;