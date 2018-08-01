import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import UnsignedInNav from "./UnsignedInNav";
import Footer from "./Footer";
import { appAuth } from "../utilities/auth";
import signInLogo from "../static/img/logos/weConnect.png";

class UserSignIn extends Component {
  state = {
    username: "",
    password: "",
    fireRedirect: false
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const newLogin = { username, password };
    // Make POST request
    // axios.post('http://daktari01-weconnect.herokuapp.com/api/v2/auth/login', {newLogin})
    axios
      .post("http://localhost:5000/api/v2/auth/login", newLogin, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        appAuth.authenticate();
        localStorage.setItem("access_token", response.data.token);
        this.setState({ fireRedirect: true });
        // toast.success(() => {
        //   <div>
        //     <p>response.data</p>
        //   </div>;
        // });
      })
      .catch(error => {
        console.log(error);
        // toast(() => {
        //   <div>
        //     <p>error</p>
        //   </div>;
        // });
      });
  };

  render() {
    const { from } = this.props.location.state || "/my-businesses";
    const { username, password, fireRedirect } = this.state;
    return (
      <div>
        <section id="body">
          <UnsignedInNav />
          <div className="container col-min-6" id="loginContainer">
            <div className="wrapper" id="loginWrapper">
              <form>
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
                  onClick={this.handleSubmit}
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
        {fireRedirect && <Redirect to={from || "/my-businesses"} />}
      </div>
    );
  }
}

export default UserSignIn;
