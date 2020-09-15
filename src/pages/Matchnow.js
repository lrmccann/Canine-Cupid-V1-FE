import React, { useContext, useState } from "react"
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import SwipeBtn from "../components/SwipeBtn";
import ProfDetails from "../components/ProfDetails";
import DistanceContainer from "../components/DistanceContainer";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import UserContext from "../utils/UserContext"
import Moment from 'react-moment';

let Matchnow = () => {
    
    const { user, allUsersNames, newUserData, newUserName, getNewUserData, getNewUserName } = useContext(UserContext)
    console.log("newUserData", newUserData);

    const [matchedNames, setMatchedName] = useState(user.matchesYes)
    console.log("matchedNames",matchedNames);

    let readableDate = <Moment format="YYYY/MM/DD">{newUserData.date}</Moment>;
    
    const rand = function (items) {
        return items[~~(items.length * Math.random())];
    };

    const filteredNames = function () {
        const arr3 = allUsersNames.filter(e=>matchedNames.findIndex(i=>i === e) === -1);
        return arr3;
    };

    const newArray = filteredNames();
    
    const next = rand(newArray);
    console.log("next",next, newArray);

    const getNextUser = function () {
        // const next1 = next;
        
        // if (matchedNames.includes(next)){
        //     console.log ("UserAlreadyMatched")

        // } else 
        if (next.localeCompare(newUserName)&&
            next.localeCompare(user.userName)){
            console.log ("getNextUser", next)
            getNewUser(next)
            getNewUserName(next)
            
        } else if (next.localeCompare(newUserName)&&
        next.localeCompare(user.userName)){
            console.log ("getNextUser - SAME1")
            getNewUser(next)
            getNewUserName(next)
        } else {
            console.log ("getNextUser - SAME2")
        };
    };

    async function getNewUser (name){   
        await API.getUserByName(name)
        .then(response => getNewUserData(response.data))
    }

    async function setNewMatches (name1, name2){
        await API.setUsersMatches(name1, name2)
        .then((response) => {console.log(response)})
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
    const userForArr = newUserData.userName;
 
    function handleYesSubmit() {
        console.log("Yes")
        // const data = matchedNames.push(newUserName);
        setNewMatches(user.userName, newUserData.userName);
        setMatchedName(matchedNames => [...matchedNames, userForArr]);
        getNextUser();
    }

    function handleNoSubmit() {
        console.log("No")
        getNextUser()
    }

    return (
        <div>
        <Navbar />
            <h2 style={{fontFamily: "Georgia, serif" , margin: "0 0 0 27%" }}>Get yo pup the lovin they deserve and match now!</h2>
            <div className="line" style={{ border: "solid black 2px", margin: "4% 10% 5% 10%" }}></div>

            <Container>
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
                    <Card petName={newUserData.petName} photoUrl={newUserData.photoUrl}>
                        <div>Pet name:  &nbsp;&nbsp;{newUserData.petName}</div> 
                        <div>Breed:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {newUserData.breed}</div> 
                        <div>Age:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {newUserData.age}</div>
                        </Card>
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
                    <Col size="md-2"/>
                    <Col size="md-8">
                        <ProfDetails>
                        <div>Location:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {newUserData.city}</div>
                        <div>Zip Code:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {newUserData.zipCode}</div>
                        <div>Join Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{readableDate}</div>
                        <div>About my pet:  &nbsp; {newUserData.info}</div>
                        </ProfDetails>
                        <Row>  
                            <Col size="md-12">
                                <DistanceContainer
                                    distance="2.3"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-2"/>
                </Row>
            </Container>
        </div>
    );
}

export default Matchnow;