import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

/**
 * Class to handle user registration
 */
class UserRegistration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {}
  };

  componentDidMount(){
    console.log(this.state)
  }
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
    const newUser = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      first_password: this.state.password,
      confirm_password: this.state.confirmPassword
    };
    // Make POST request
    axios
      .post(localApi + "auth/register", newUser, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
        toast.success("Registration successful. Go to your email to activate your account");
        return <Redirect to="/login" />;
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.validation_error
        });
        console.log(this.state);
        toast.error("Registration unsuccessful. Please try again");
      });
  };

  render() {
    const errors = this.state.errors
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container d-flex p-2 col-min-6" id="loginContainer">
            <div className="wrapper" id="loginWrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="col-sm-12" id="loginLogo">
                  <img
                    className="img-fluid"
                    src={signInLogo}
                    alt="WeConnect logo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">First name</label>
                  <input
                    type="text"
                    className={errors.firstname ? "form-control is-invalid" : "form-control" }
                    id="firstNameInput"
                    name="firstName"
                    placeholder="Enter first name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  {errors.firstname &&  <small className="text-danger">{errors.firstname}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Last name</label>
                  <input
                    type="text"
                    className={errors.lastname ? "form-control is-invalid" : "form-control" }
                    id="lastNameInput"
                    name="lastName"
                    placeholder="Enter last name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  {errors.lastname &&  <small className="text-danger">{errors.lastname}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email address</label>
                  <input
                    type="email"
                    className={errors.email ? "form-control is-invalid" : "form-control" }
                    id="emailInput"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {errors.email &&  <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="loginUsername">Username</label>
                  <input
                    type="text"
                    className={errors.username ? "form-control is-invalid" : "form-control" }
                    id="loginUsernameInput"
                    name="username"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  {errors.username &&  <small className="text-danger">{errors.username}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    className={errors.password ? "form-control is-invalid" : "form-control" }
                    id="loginPasswordInput"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Confirm Password</label>
                  <input
                    type="password"
                    className={errors.password ? "form-control is-invalid" : "form-control" }
                    id="loginConfirmPasswordInput"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                  {errors.password &&  <small className="text-danger">{errors.password}</small>}                  
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Register
                </button>
                <p>
                  Have an account? <a href="login">Login</a>
                </p>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default UserRegistration;
