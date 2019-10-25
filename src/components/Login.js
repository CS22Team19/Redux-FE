// If set up properly, your backend will create the user instance, salt the password using
// BCrypt, and then return an object with a user key and a jwt key. This object is the important
// part to Auth. You’ll see it later in this tutorial, but we will essentially take the user object
// and save it to your Redux store, then take the token associated with the user and save it to localStorage.

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import MapGrid from './MapGrid'
import TextSpace from './TextSpace'

class Login extends Component {
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
    event.preventDefault()
   this.props.userLoginFetch(this.state)
   .then(res => {
            console.log(res)
    if(res){
        this.props.history.push('/dungeon')
    }    
}) 
.catch(err => {
    console.log(err)
})
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
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
            Login
          </Button>
        </form>
        <div className="yoyo">
        <MapGrid  player={this.state.username}  />
        <TextSpace player={this.state.username}  />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  })

  export default connect(null, mapDispatchToProps)(Login);











// If set up properly, your backend will create the user instance, salt the password using
// BCrypt, and then return an object with a user key and a jwt key. This object is the important
// part to Auth. You’ll see it later in this tutorial, but we will essentially take the user object
// and save it to your Redux store, then take the token associated with the user and save it to localStorage.

// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./Login.css";

// export default function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <FormLabel>Email</FormLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }
