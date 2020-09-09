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
        this.fetchData();
    }
    fetchData = (i) => {
        // get all entities - GET
        fetch("https://canine-cupid.herokuapp.com/users")
            .then(response => response.json())
            .then(response => {
                this.state.users.push(response)
                for(i = 0; i < 10; i++){
                    this.setState({ users: [response.users._id[i], response.email] })
                    console.log(this.state.users, "users")
                }
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        console.log(this.state.users, "match nah")
        let handleClickLeft = () => {
            this.setState({ matchNo: [this.state.users] })
        }
        console.log(this.state.matchNo, "asdsgasgsdgsf")
        return (
            <button onClick={handleClickLeft} onClick={this.fetchData} className={`btn-${this.props.size} btn-${this.props.variant}`}><div className={`arrow-${this.props.direction}`}></div></button>
        );
    };
};