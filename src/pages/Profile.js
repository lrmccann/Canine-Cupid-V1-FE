import React from "react";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import ProfDetails from "../components/ProfDetails";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import { EditProfileButton } from "../components/Button";
import Map from "../components/map";

let Profile = () => {
  
    return (
        <div>
            <Navbar />
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 48%" }}>Profile</h2>
            <div className="line" style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
            <Container fluid>
                <Row-fluid>
                    <Col size="md-12">
                        <Card
                            // image={user.photoUrl}
                            // name={user.petName}
                            // breed={user.breed}
                            // age={user.age}
                        />
                    </Col>
                </Row-fluid>
                <Row>
                    <ProfDetails
                        // userName={user.userName}
                        // location={user.city}
                        // interests={user.info}
                        // joinDate={user.date}
                    />
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