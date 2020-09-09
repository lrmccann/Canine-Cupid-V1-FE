import React, { useState, Component } from "react";
import "./style.css";


export default class SwipeBtn extends React.Component {
    inputEl = React.createRef()
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            matchYes: [],
            matchNo: []
        }
    }

    componentDidMount() {
        // get all entities - GET
        fetch("https://canine-cupid.herokuapp.com/users/lrmccann401/Allison401")
            .then(response => response.json())
            .then(response => {
                this.setState({users: response})
                console.log(this.state.users, "helooooooo12345")
            })
            .catch(err => {
                console.log(err);
            });
          }

          
    render() {
            function handleClickLeft() {
                this.setState({matchNo : [this.state.users] })
            }
            console.log(this.state.users, "asdsgasgsdgsf")    
        return (
            <button onClick={handleClickLeft} className={`btn-${this.props.size} btn-${this.props.variant}`}><div className={`arrow-${this.props.direction}`}></div></button>
        );
    };
};
