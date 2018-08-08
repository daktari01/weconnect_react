import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

/**
 * Class to handle user login
 */
class UserSignIn extends Component {
  state = {
    username: "",
    password: "",
    fireRedirect: false
  };

  /**
   * Handle onChange event for inputs
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**
   * Handle the submit function
   */
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const newLogin = { username, password };
    // Make POST request
    axios
      .post(localApi + "auth/login", newLogin, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        // appAuth.authenticate();
        toast.success("Login successful");
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("isAuthenticated", true);
        this.setState({ fireRedirect: true });
      })
      .catch(error => {
        console.log(error);
        toast.error("Login unsuccessful. Please try again");
      });
  };

  render() {
    const { from } = this.props.location.state || "/my-businesses";
    const { username, password, fireRedirect } = this.state;
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container col-min-6" id="loginContainer">
            <div className="wrapper" id="loginWrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="col-sm-12" id="loginLogo">
                  <img className="img-fluid" alt="logo" src={signInLogo} />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="loginUsernameInput"
                    placeholder="Enter username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPasswordInput"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Login
                </button>
                <br />
                <p>
                  Do not have an account? <a href="/register">Register</a>
                </p>
                <p>
                  <a href="/reset-password">Forgot password?</a>
                </p>
              </form>
            </div>
          </div>
        </section>
        <Footer />
        {fireRedirect && <Redirect to={from || "/businesses"} />}
      </div>
    );
  }
}

export default UserSignIn;
