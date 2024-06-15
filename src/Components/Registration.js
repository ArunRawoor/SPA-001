/*import React, { Component } from 'react'

export default class Registration extends Component {
  constructor(){
    super();
    this.state ={
        participate:"",
        roll_no:null,
    };}

    submitHandler = (event) =>
    { 
        alert(this.state.participate+"  Registration Completed ");
    }
    changeHandler =(event)=>{
        let myname = event.target.name;
     let myvalue = event.target.value;
     if (myname === "roll_no"){
        if (!Number(myvalue)){
            alert("Your Roll Number Must Be a Number");
        }}
    this.setState({[myname]:myvalue});  
     }
  render() {
  return (
 <div class="valid"> 
 <form onSubmit={this.submitHandler}>
 <h1>Registration Form</h1>

 <p> Register  Name  :   
 <input type="text"
 name="participate" onChange={this.changeHandler}/></p>
 <p>Register Number:
 <input type="text"
 name="roll_no" onChange={this.changeHandler}/></p>
 <input type="submit"/>
 <h1>Your Register Name is :{this.state.participate}</h1>
 <h1>Your Register Number is :{this.state.roll_no}</h1>
 </form>
  </div>
)
}
}*/

import { alignCenter } from 'fontawesome';
import React, { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
  }
 

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Validate the form
    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = '*Name is required';
    }
    if (email.trim() === '') {
      validationErrors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (password.trim() === '') {
      validationErrors.password = '*Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }

    // If there are validation errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }

    // Form is valid, proceed with registration logic
    // TODO: Implement your registration logic here
    alert("Registration is completed");

    // Reset form fields and errors after successful registration
    this.setState({
      name: '',
      email: '',
      password: '',
      errors: {}
    });
  };
    
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <h3>Welcome To Login Page</h3>
          <label htmlFor="name" >Name:</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <span className='B'>{errors.name} </span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <span className='B'>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <span className='B'>{errors.password}</span>}
        </div>

        <button type="submit" className='A'>Login</button> 
        <a href="/Java" role="link" tabindex="0">Forgot password?</a>

      </form>
      
    );
  }
}

export default Registration;  

