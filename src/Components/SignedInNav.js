import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../static/img/logos/weConnect.png";

class SignedInNav extends Component {
  state = {
    fireRedirect: false
  }
  handleLogout = event => {
    const access_token = localStorage.getItem("access_token");
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/v2/auth/logout", {}, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ fireRedirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
      const { fireRedirect } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-faded">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="WeConnect logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/register-business">
                  Register business <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {fireRedirect && <Redirect to={"/login"} />}
      </div>
    );
  }
}

export default SignedInNav;
