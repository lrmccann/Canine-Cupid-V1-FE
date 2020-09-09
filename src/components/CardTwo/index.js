import React, { useEffect, useState, Component, useContext } from "react";
// import CardBtn from "../CardBtn";
import "./style.css";
import Col from "../Col";
import { render } from "react-dom";



export default class CardTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      petName: '',
      breed: '',
      age: ''
    };

  }
  componentDidMount() {
    // get all entities - GET
    fetch("https://canine-cupid.herokuapp.com/users/lrmccann401/Allison401")
      .then(response => response.json())
      .then(response => {
        this.setState({
          users: response,
          photoUrl: response.photoUrl,
          userName: response.petName,
          breed: response.breed,
          age: response.age
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Col size="md-4">
        <div className="card">
          <div className="img-container">
            <img alt={this.state.photoUrl} src={this.state.photoUrl} />
          </div>
          <div className="content">
            <ul>
              <li>
                <h5>Name: {this.state.userName}</h5>
              </li>
              <li>
                <h5>Breed: {this.state.breed}</h5>
              </li>
              <li>
                <h5>Age: {this.state.age}</h5>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    )
  }

}