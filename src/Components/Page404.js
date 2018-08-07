import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import signInLogo from "../static/img/logos/weConnect.png";
import chimp from "../static/img/backgrounds/chimp404.jpg";

class Page404 extends Component {
  render() {
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container image404 col-min-6" id="loginContainer">
            <div className="wrapper">
              <div className="card">
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      id="img404"
                      className="img-fluid"
                      alt="page404"
                      src={chimp}
                    />
                  </div>
                  <div className="col-sm-8">
                    <div id="text404" className="align-middle">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <h4>The page you are looking for could be found on this server.</h4>
                    <br />
                    <a href="/" className="btn btn-primary">Take Me Home</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Page404;
