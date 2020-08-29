import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { Button } from "../components/Button";
import ProfDetails from "../components/ProfDetails";

let Profile = () => {

    return (
        <div>
            <h2>Profile</h2>

        <Container fluid>
            <Row>
                <Col size ="md-6">
                    <Card 
                    image="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg" 
                    name = "Bret"
                    breed = "Golden Retriever"
                    favtoy ="Alligator"
                    />
                </Col>
                    <Col size="md-6">
                        <Button
                        text = "Match Now!"
                        />
                        <Button 
                        text = "Messages"
                        />
                    </Col>
            </Row>
                <Row>
                    <ProfDetails
                        userName = "lrmccann"
                        location = "Chicago"
                        interests = "Long dog walks, sniffing the roses, treats"
                        numOfPets = "3"
                        joinDate = "09/26/2020"
                    />
                </Row>
        </Container>
        </div>
    )

}



export default Profile;