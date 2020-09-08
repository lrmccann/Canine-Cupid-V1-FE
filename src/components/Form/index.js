import React from "react";
import "./style.css";

// This file exports the Input, TextArea and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function Checkbox(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input type="checkbox" {...props}/>     
    </div>
  );
}


export function TextArea(props) {
  return (
    <div className="form-group">
      {/* <textarea className="form-control" rows="20" {...props} /> */}
      <label htmlFor={props.name}>{props.label}</label>
      <textarea className="form-control" {...props} />
    
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props}
    //  style={{ float: "right", marginBottom: 10 }}
    //  className="btn btn-success">
     className="appbtnpink">
      {props.children}
    </button>
  );
}
