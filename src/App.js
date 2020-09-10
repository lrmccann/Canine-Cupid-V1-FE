import React, { Profiler, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Matchnow from "./pages/Matchnow";
import Matches from "./pages/Matches";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import Text from "./components/MyText"
// import { profile } from "console";
import { UserProvider } from "./utils/UserContext"
import "./App.css";

function App() {


  const [user, setUser] = useState({})
  console.log (user)

  // useEffect (()=>{
  //   const raw = localStorage.getItem('user')|| {}
  //   setUser(JSON.parse(raw))
  // }, [])

  const getData = (data) => {
    setUser (user=>{return user = data})
    localStorage.setItem('user', JSON.stringify(data))
  }

  return (
    <UserProvider value = {{
      user,
      getData
    }}>
      <Router>
      {/* <Navbar sticky="top"/> */}
      {/* <Text> */}
        <Header />
         {/* <Wrapper>  */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/matchnow" component={Matchnow} />
          <Route exact path="/matches" component={Matches} />       
        {/* <Contacts /> */}
      <Footer />
      {/* </Text> */}
    </Router>
    </UserProvider>
  )
}

export default App;
