import React from "react";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import ProfDetails from "../components/ProfDetails";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import { EditProfileButton } from "../components/Button";

let Profile = () => {

    return (
        <div>
            <Navbar />
            <h1 style={{ margin: "0 0 0 43%" }}>My Profile</h1>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
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
                <Col size="md-12">
                    <h1 className="mapText" style={{marginTop:"12%", marginLeft: "40%"}}>Parks near you</h1>
                    <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>
                </Col>
                <Map />
            </Container>
        </div>
    )

}


export default Profile;