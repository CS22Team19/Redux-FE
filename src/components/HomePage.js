import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import "./HomePage.css";

export class HomePage extends Component {
    render() {
        return (
            <div className="navYo">
            <nav>
            <Link to="/login" className="loginNav">Login</Link>
            <Link to="/register">Register</Link>
            </nav>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
            </div>
        )
    }
}

export default HomePage