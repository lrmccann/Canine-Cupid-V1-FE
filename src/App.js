import React, { Profiler } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Matchnow from "./pages/Matchnow";
import Matches from "./pages/Matches";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import Text from "./components/MyText"
// import { profile } from "console";


function App() {
  return (
      <Router>
      {/* <Navbar sticky="top"/> */}
      {/* <Text> */}
        <Header />
         <Wrapper> 
          <Route exact path="/" component={Matchnow} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/matchnow" component={Matchnow} />
          <Route exact path="/matches" component={Matches} />
        {/* <Contacts /> */}
         </Wrapper> 
      <Footer />
      {/* </Text> */}
    </Router>
  )
}

export default App;
