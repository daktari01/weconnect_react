import React, { Component } from "react";
import UnsignedInNav from "./UnsignedInNav";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";

class ResetPassword extends Component {
  render() {
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
                  <label htmlFor="loginEmail">Email</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="loginEmailInput"
                    placeholder="Enter email to reset password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Reset Password
                </button>
                {/* <br /> */}
                {/* <p>
                  Go to your email address to get instructions on resetting your
                  password.
                </p> */}
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
