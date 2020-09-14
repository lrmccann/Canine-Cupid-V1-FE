import React, { useContext, useState, useEffect } from "react"
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import SwipeBtn from "../components/SwipeBtn";
import ProfDetails from "../components/ProfDetails";
import DistanceContainer from "../components/DistanceContainer";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import UserContext from "../utils/UserContext"

let Matchnow = () => {
    
    const { user, allUsersNames, newUserData, newUserName, getNewUserData, getNewUserName } = useContext(UserContext)
    console.log("allUsersNames", allUsersNames, "newUser", newUserData);

    const readableDate = new Date(newUserData.date).toDateString();
    // const [allUsers, setAllUseres] = useState([])
    //     console.log("allUsers", allUsers);
        
    // const [nextUser, setNextUser] = useState({});
    //     console.log("nextUser", nextUser);

    const rand = function (items) {
        return items[~~(items.length * Math.random())];
    }

    const getNextUser = function (allUsersNames) {
        let next = rand(allUsersNames)
        if (next.localeCompare(newUserName)&&
            next.localeCompare(user.userName)){
            console.log ("getNextUser", next)
            getNewUserName(next)
            getNewUser(next)
        } else if (next.localeCompare(newUserName)&&
        next.localeCompare(user.userName)){
            console.log ("getNextUser - SAME1")
            getNewUserName(next)
            getNewUser(next)
        } else {
            console.log ("getNextUser - SAME2")
        }
    }

    async function getNewUser (name){   
        await API.getUserByName(name)
        .then(response => getNewUserData(response.data))
    }

    async function setNewMatches (name1, name2){   
        await API.setUsersMatches(name1, name2)
        .then(response => console.log(response))
    }
    // useEffect (()=>{
    //     getNewUser(allUsersNames[0]);
    // }, [])   
        // async function getAllUsersNames () {
        //     const result = await API.getAllUsers()
        //             .then(response => response.json())
    //    console.log(allUsers[0], "AAAALLLLUSERS")
    //    await API.getUserById(allUsers[0])
       // .then(ABCDEF())
       // .then(res => {setNewUser(res)})
   // setIsLoaded(true)
  
    //        const userId = async function getUserId() {
    //        const id = allUsers[0]
    //         await API.getUserById(id)
    //         .then(response => response.json())
    //         console.log(newUser)
    //    }
    //    const XYZ = userId.result
    //    getUserId()
  

    // useEffect (
    //     ()=>{
    //         getNewUsersId()
    //         async function getAllUsersNames () {
    //             await API.getAllUsers()
    //             .then(response => response.json())
    //         }
    //         const data = getAllUsersNames()
    //     console.log(data)
    //     setAllUseres (data.data)
    // }, [allUsers] )

    // useEffect (
    //     ()=>{
    // }, [newUser] )

 
    function handleYesSubmit() {
        console.log("Yes")
        setNewMatches(user.userName, newUserName)
        getNextUser(allUsersNames)
        // switchToNextUser()

    }
    function handleNoSubmit() {
        console.log("No")
        getNextUser(allUsersNames)
        // switchToNextUser()
    }

    return (
        <div>
        <Navbar />
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 27%" }}>Get yo pup the lovin they deserve and match now!</h2>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>

            <Container fixed>
                <Row>
                    <Col size="md-2">
                        <SwipeBtn
                            size="lg"
                            variant="danger"
                            direction="left"
                            onClick={handleNoSubmit}
                        />
                    </Col>
                    <Col size="md-8">
                    <Card petName={newUserData.petName} photoUrl={newUserData.photoUrl}>
                        <div>Pet name: {newUserData.petName}</div> 
                        <div>Breed: {newUserData.breed}</div> 
                        <div>Age: {newUserData.age}</div>
                        </Card>
                    </Col>

                    <Col size="md-2">
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
                        <ProfDetails>
                        <div>Location: {newUserData.city}</div>
                        <div>Zip Code:  {newUserData.zipCode}</div>
                        <div>About pet: {newUserData.info}</div>
                        <div>Join Date: {readableDate}</div>
                        </ProfDetails>
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