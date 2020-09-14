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
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 47%" }}>Profile</h2>
            <h2 style={{margin: "0 0 0 47%" }}>Hi {user.userName}!</h2>
            <div className="line" style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
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
                <h6>&nbsp;&nbsp; Meet at a Park near your location - See map below</h6>
                <Map />
            </Container>
        </div>
    )

}


export default Profile;