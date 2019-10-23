import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path="/" component={Login} />
       </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(App);



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