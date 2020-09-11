import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextInput from '../components/TextValidator';
 
class Register extends Component
{
 
 state = {
 email: '',
 first_name: '',
 last_name: '',
 password: ''
 };
 
 handleSubmit = (e) => {
 alert('submitted successfully');
 }
 
 handleChange = (e) => {
 
 this.setState({
 [e.target.name]: e.target.value
 });
 }
 
 render(){
 
        return(
            <div className="row">
             <div className="col-md-9 col-md-offset-3">
                 <ValidatorForm
              ref="form"
            onSubmit={this.handleSubmit}
          >
 <TextInput
                 onChange={this.handleChange}
                 name="first_name"
                 className="form-control"
                 value={this.state.first_name}
                 validators={['required']}
                 errorMessages={['first name required']}
             />
 
             <TextInput
                 onChange={this.handleChange}
                 name="last_name"
                 className="form-control"
                 value={this.state.last_name}
                 validators={['required']}
                 errorMessages={['last name required']}
             />
 
             <TextInput
                 onChange={this.handleChange}
                 name="email"
                 className="form-control"
                 value={this.state.email}
                 validators={['required', 'isEmail']}
                 errorMessages={['email required', 'email is not valid']}
             />
 
 <TextInput
                 onChange={this.handleChange}
                 name="password"
                 type="password"
                 className="form-control"
                 value={this.state.password}
                 validators={['required', 'minStringLength:5']}
                 errorMessages={['password required', 'password must have a minimum length is 5 characters']}
             />
 
             
 
 
 
              <button type="submit" className="btn btn-primary">submit</button>
          </ValidatorForm>
         </div>
            </div>
        )
    }
}
 
export default Register;