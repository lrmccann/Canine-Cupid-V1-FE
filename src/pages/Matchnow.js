import React, { useState, useEffect } from "react"
import { Row, Container } from "../components/Grid";
import CardTwo from "../components/CardTwo";
import SwipeBtn from "../components/SwipeBtn";
import ProfDetails from "../components/ProfDetails";
import DistanceContainer from "../components/DistanceContainer";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import API from "../utils/API";

let Matchnow = () => {

    const [allUsers, setAllUseres] = useState([])
    console.log("stateMatchnow", allUsers);

    useEffect (()=>{
        async function getAllUsersId () {
            const result =  await API.getAllUsers()
            return result.data}
        const data = getAllUsersId()
        setAllUseres (data)
    }, [] )
    
    let id = "5f5cf21aa6a0230017b8ce4b"

   async function getNextUserData(){
       return await API.getUserById(id)
    }

    function handleYesSubmit() {
        console.log("Yes")
        console.log(getNextUserData())

    }
    function handleNoSubmit() {
        console.log("No")
        console.log(getNextUserData())
    }

    return (
        <div>
        <Navbar />
            <h2 style={{margin: "0 0 0 27%" }}>Get yo pup the lovin they deserve and match now!</h2>
            <div className="line" style={{ border: "solid black 1px", margin: "4% 10% 5% 10%" }}></div>

            <Container fixed>
                <Row>
                    <Col size="md-3">
                        <SwipeBtn
                            size="lg"
                            variant="danger"
                            direction="left"
                            onClick={handleNoSubmit}
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
                            size="lg"
                            variant="success"
                            direction="right"
                            onClick={handleYesSubmit}
                        />
                    </Col>
                </Row>
                </Container>
                <Container fluid>
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