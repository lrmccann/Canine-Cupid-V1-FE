import React from "react"
import {Row, Container } from "../components/Grid";
import CardTwo from "../components/CardTwo";
import SwipeBtn from "../components/SwipeBtn";
import ProfDetails from "../components/ProfDetails";
import DistanceContainer from "../components/DistanceContainer";
import Col from "../components/Col";

let Matchnow = () => {
    

    return (
        <div>
            <h2>Get yo pup the lovin they deserve and match now!</h2>
            <div className="line" style={{border:"solid black 1px",  margin:"0 0 25px 0"}}></div>

            <Container fluid>
                <Row>
                    <Col size="md-3">
                        <SwipeBtn
                        size = "lg"
                        variant = "danger"
                        direction = "left"
                        />
                    </Col>
                    <Col size="md-6">
                        <CardTwo
                            image="https://i.pinimg.com/736x/2a/e9/a4/2ae9a40b4363e74554dcae603cd8356d.jpg"
                            name="Walter"
                            breed="Corgi"
                            favtoy="Tire"
                        />
                    </Col>

                    <Col size="md-3">
                        <SwipeBtn
                            size = "lg"
                            variant = "success"
                            direction = "right"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <ProfDetails
                            userName="MarcyG"
                            location="NYC"
                            interests="Dog parks, the beach"
                            numOfPets="1"
                            joinDate="09/26/2020"
                        />
                    </Col>
                    <Col size="md-12">
                        <DistanceContainer
                            distance="2.3"
                        />


                    </Col>



                </Row>
            </Container>
        </div>
    );

}



export default Matchnow;