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
          <div className="container col-min-6" id="loginContainer">
            <div className="wrapper">
              <div className="card">
                <div className="row">
                  <div col-sm-6>
                    <img
                      id="img404"
                      className="img-fluid"
                      alt="page404"
                      src={chimp}
                    />
                  </div>
                  <div col-sm-6>
                    <div id="text404">
                    babababa
                    {/* <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <h3>The page you are looking for could be found on this server.</h3> */}
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
