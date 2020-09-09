import React, { Component } from "react";
import Col from "../Col"
import "./style.css"

export default class ProfDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            park: '',
            ball: '',
            frisbee: '',
            info: ""
        }
    }

    componentDidMount() {
        // get all entities - GET
        fetch("https://canine-cupid.herokuapp.com/users/lrmccann401/Allison401")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    users: response,
                    email: response.email,
                    park: response.park,
                    ball: response.ball,
                    frisbee: response.frisbee,
                    info: response.info
                })
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
            // fetch("https://canine-cupid.herokuapp.com/users/lrmccann4012/Chandon4012")
            // .then(response => response.json())
            // .then(response => {
            //     this.setState({
            //         users: response,
            //         email: response.email,
            //         park: response.park,
            //         ball: response.ball,
            //         frisbee: response.frisbee,
            //         info: response.info
            //     })
            //     console.log(response)
            // })
            // .catch(err => {
            //     console.log(err);
            // })

    }

    render() {
        return (
            <Col size="md-12">
                <div className="profDetails">
                    <div className="content">
                        <h1>Profile Details</h1>
                        <div className="line"></div>
                        <h4>Username: {this.state.email}</h4>
                        <h4>Location: {this.state.park}</h4>
                        <h4>Interested In: {this.state.ball}</h4>
                        <h4>Number of Pets: {this.state.frisbee}</h4>
                        <h4>More info: {this.state.info}</h4>
                        <h4>Join Date: {this.state.joinDate}</h4>
                    </div>
                </div>
            </Col>
        )

    };
}
