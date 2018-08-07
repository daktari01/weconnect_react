import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../static/img/logos/weConnect.png";
import { toast } from "react-toastify";
import { localApi } from "../utilities/api";

class NavBar extends Component {
  state = {
    fireRedirect: false
  };
  componentWillMount() {
    this.setState({ logged_in: false });
  }
  componentDidMount() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.setState({ logged_in: true });
    }
  }
  handleLogout = event => {
    const access_token = localStorage.getItem("access_token");
    event.preventDefault();
    axios
      .post(
        localApi + "auth/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "x-access-token": access_token
          }
        }
      )
      .then(response => {
        window.location.reload();
        toast.success(response.data["message"]);
        this.setState({ logged_in: false, fireRedirect: true });
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("isAuthenticated");
        console.log(this.state.logged_in);
      })
      .catch(error => {
        toast.error("Log out unsuccessful. Please try again");
      });
  };
  render() {
    const { fireRedirect, logged_in } = this.state;
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
          {logged_in ? (
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/businesses">
                    All businesses <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/my-businesses">
                    My businesses <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
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
          ) : (
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        {fireRedirect && <Redirect to={"/login"} />}
      </div>
    );
  }
}

export default NavBar;
