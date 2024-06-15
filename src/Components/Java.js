/*import React, { Component } from 'react'

export default class Java extends Component {
    render() {
        return (
            <div>Java Full Stack Course Details<br></br>
                <pr>
                    Fees: 60k <br></br>
                    Duration : 40 days
                </pr>
            </div>
        )
    }
}
*/

import React, { Component } from 'react';

class Java extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      errors: {}
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email } = this.state;

    // Validate the form
    const validationErrors = {};
    if (email.trim() === '') {
      validationErrors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    // If there are validation errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }

    // Form is valid, proceed with forget password logic
    // TODO: Implement your forget password logic here
    alert('An email with password reset instructions has been sent to your email address.');

    // Reset form field and errors after submission
    this.setState({
      email: '',
      errors: {}
    });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { email, errors } = this.state;

    return (
      <div>
        <h2>Forget Password?</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Please Enter Your Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <span >{errors.email}</span>}
          </div>

          <button type="submit" className='F'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Java;
