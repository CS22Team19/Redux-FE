import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Hud from "./Hud.js";

class App extends Component {
  componentDidMount = () => {
    //Here we want to create an action that has a GET request with an auothirization header with the token
    //backend should be set up to receive the token, decode it, and then return its user object.
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dungeon" component={Hud} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);

// import React from "react";
// import "./App.css";
// import { connect } from "react-redux";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">Boiler Plate</div>
//       </Router>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {};
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(App);
