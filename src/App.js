import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Signup from "./pages/Signup";
import Matchnow from "./pages/Matchnow";
import Matches from "./pages/Matches";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollTop";
import "bootstrap/dist/css/bootstrap.min.css";
// import Text from "./components/MyText"
// import { profile } from "console";
import { UserProvider } from "./utils/UserContext"
import "./App.css";

function App() {

  const [user, setUser] = useState({});
  console.log ("user", user);
  const [newUserData, setNewUserData] = useState({});
  console.log ("newUserData", newUserData);
  const [newUserName, setNewUserName] = useState("");
  console.log ("newUserName", newUserName)
  const [allUsersNames, setAllUsersNames] = useState([]);
  console.log ("allUsersNames", allUsersNames);
  const [userForMatchesPage , setUserForMatchesPage] = useState([])

  useEffect(
    ()=>{const raw = localStorage.getItem('user')
        setUser(JSON.parse(raw))
    }, [] )

  useEffect(
    ()=>{localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  // useEffect (()=>{
  //   const raw = localStorage.getItem('user')|| {}
  //   setUser(JSON.parse(raw))
  // }, [])

  const getData = (data) => {
    setUser (user=>{return user = data})
  }

  const getNewUserData = (data) => {
    setNewUserData (newUserData=>{return newUserData = data})
  }

  const getNewUserName = (data) => {
    setNewUserName (newUserName=>{return newUserName = data})
  }

  const getAllUsersNames = (data) => {
    setAllUsersNames (allUsersNames=>{return allUsersNames=data})
  }

  const getAllMatchesForMatchesPage = (data) => {
    setUserForMatchesPage (userForMatchesPage=>{return userForMatchesPage = data})
  }

  return (
    <UserProvider value = {{
      user,
      newUserData,
      newUserName,
      allUsersNames,
      userForMatchesPage,

      getData,
      getNewUserData,
      getNewUserName,
      getAllUsersNames,
      getAllMatchesForMatchesPage
    }}>
      <Router>
      {/* <Navbar sticky="top"/> */}
      {/* <Text> */}
        <Header />
         {/* <Wrapper>  */}
          <Route exact activeClassName path="/" component={Login} />
          <Route exact activeClassName  path="/login" component={Login} />
          
          <Route exact activeClassName  path="/signup" component={Signup} />
          <ScrollToTop>
            <Switch>
          <Route exact activeClassName  path="/profile" component={Profile} />

            </Switch>
          </ScrollToTop>
          <Route exact activeClassName  path="/editprofile" component={EditProfile} />
          <Route exact activeClassName  path="/matchnow" component={Matchnow} />
          <Route exact activeClassName  path="/matches" component={Matches} />       
        {/* <Contacts /> */}
      <Footer />
      {/* </Text> */}
    </Router>
    </UserProvider>
  )
}

export default App;
