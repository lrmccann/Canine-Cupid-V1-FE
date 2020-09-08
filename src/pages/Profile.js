import React from "react";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import ProfDetails from "../components/ProfDetails";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
// import EditProfileButton from "../components/Button";

let Profile = () => {
  
    return (
        <div>
            <Navbar />
            <h2 style={{margin: "0 0 0 47%" }}>Profile</h2>
            <div className="line" style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>
            <Container fluid>
                <Row-fluid>
                    <Col size="md-12">
                        <Card
                            image="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
                            name="Bret"
                            breed="Golden Retriever"
                            favtoy="Alligator"
                        />
                    </Col>
                </Row-fluid>
                <Row>
                    <ProfDetails
                        userName="lrmccann"
                        location="Chicago"
                        interests="Long dog walks, sniffing the roses, treats"
                        numOfPets="3"
                        joinDate="09/26/2020"
                    />
                </Row>
                {/* <EditProfileButton
                 onClick={handleEditSubmit}
                /> */}
            </Container>
        </div>
    )

}


export default Profile;