import React from "react";

function EmployeeCard(props) {
  return (
    // <div className="row">
    <tr>
      {/* <div className= "col-2"> */}
      {/* <td > */}
      <th scope="row"><img alt={props.firstName}  src={props.picture} /></th>  
      {/* </td>  */}
      {/* </div>
      <div className= "col-2"> */}
      <td >{props.firstName}</td>
      {/* </div>
      <div className= "col-2"> */}
      <td >{props.lastName}</td>
      {/* </div>
      <div className= "col-3"> */}
      <td >{props.email}</td>
      {/* </div>
      <div className= "col-3"> */}
      <td >{props.phone}</td>
      {/* </div> */}
   </tr>
  //  </div>
  );
}

export default EmployeeCard;