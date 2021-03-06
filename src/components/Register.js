// If set up properly, your backend will create the user instance, salt the password using
// BCrypt, and then return an object with a user key and a jwt key. This object is the important
// part to Auth. You’ll see it later in this tutorial, but we will essentially take the user object
// and save it to your Redux store, then take the token associated with the user and save it to localStorage.

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from 'react-redux';

import {userPostFetch} from '../actions';
// ^^This will be the function that handles the fetch itself, as well as saving the user object to the Redux store and adding the token to localStorage

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state)
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              name="username"
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </FormGroup>
          <Button block bsSize="large" type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

// export default Register;

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  })

  export default connect(null, mapDispatchToProps)(Register);
