import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

/**
 * Handle Reset component
 */
class Reset extends Component {
  state = {
    email: "",
    fireRedirect: false
  };

  componentDidMount() {
    const reset_token = this.props.match.params.token;
    this.setState({
      reset_token: reset_token
    });
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
    const newPass = {
      new_password: this.state.password,
      confirm_new_password: this.state.confirmPassword
    };
    // Make POST request
    axios
      .post(localApi + "auth/reset/" + this.state.reset_token, newPass, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(() => {
        toast.success("Reset password successful. You can now login.");
        this.setState({ fireRedirect: true });
      })
      .catch(() => {
        toast.error("Reset password unsuccessful. Please try again");
      });
  };

  render() {
    const { fireRedirect } = this.state;
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
                  <label htmlFor="loginEmail">Password</label>
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword"
                    placeholder="Enter confirm password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
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
        {fireRedirect && <Redirect to="/login" />}
      </div>
    );
  }
}
Reset.propTypes = {
  match: PropTypes.object,
};
export default Reset;
