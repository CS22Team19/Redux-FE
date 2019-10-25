import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hud from "./Hud.js";
import HomePage from './HomePage'

class App extends Component {



  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/dungeon" component={Hud} />
          <HomePage />
        </Switch>
      </div>
    );
  }
}

export default App;



// const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn
// })

// export default connect(mapStateToProps, {userLoginFetch})(App)


// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

// export default connect(null, mapDispatchToProps)(App);





