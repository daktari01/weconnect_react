import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

  /**
   * Handle ResetPassword class
   */
class ResetPassword extends Component {
  state = {
    email: ""
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
    const newPass = {
      email: this.state.email
    };
    // Make POST request
    axios
      .post(localApi + "auth/reset-password", newPass, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
        toast.success(
          "Almost there. Go to your email address for a password reset link."
        );
        return <Redirect to="/login" />;
      })
      .catch(error => {
        toast.error("Reset password unsuccessful. Please try again");
      });
  };

  render() {
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container col-min-6" id="loginContainer">
            <div className="wrapper" id="loginWrapper">
              <form>
                <div className="col-sm-12" id="loginLogo">
                  <img className="img-fluid" alt="logo" src={signInLogo} />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="loginEmailInput"
                    placeholder="Enter email to reset password"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.handleSubmit}
                >
                  Reset Password
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ResetPassword;
