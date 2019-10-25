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

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  // getProfileFetch: () => dispatch(getProfileFetch())
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
=======
export default App;



// const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn
// })

// export default connect(mapStateToProps, {userLoginFetch})(App)


// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

// export default connect(null, mapDispatchToProps)(App);





>>>>>>> 33678b2d3e680dfc1ec3256a114b70e3e3143109
