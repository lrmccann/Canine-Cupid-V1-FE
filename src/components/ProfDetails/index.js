import React, {useContext} from "react"
import Col from "../Col"
import "./style.css"
import UserContext from "../../utils/UserContext";
import Moment from 'react-moment';

function ProfDetails(props) {
    const {user} = useContext(UserContext)
    return (
        <Col size="md-12">
            <div className="profDetails">
                <div className="content">
                    <h2>Profile Details</h2>
                    <div className="line"></div>
                    <h4 style={{paddingTop:"2%"}} className="contentOne">{props.children}</h4>
                    {/* <h4>Username:&nbsp;&nbsp; {user.userName}</h4>
                    <h4>Location:&nbsp;&nbsp;&nbsp; {user.city}&nbsp;,&nbsp;&nbsp;&nbsp; {user.zipCode} </h4>
                    <h4>About pet:&nbsp; {user.info}</h4>
                    <h4>Join Date:&nbsp;&nbsp;&nbsp; */}
                    {/* </h4> */}
                </div>
            </div>
        </Col>
    )
}
export default ProfDetails;
