import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import UserRegistration from "./Components/UserRegistration";
import UserSignIn from "./Components/UserSignIn";
import Businesses from "./Components/Businesses";
import MyBusinesses from "./Components/MyBusinesses";
import BusinessProfile from "./Components/BusinessProfile";
import RegisterBusiness from "./Components/RegisterBusiness";
import Reset from "./Components/Reset";
import UpdateBusinessProfile from "./Components/UpdateBusinessProfile";
import ResetPassword from "./Components/ResetPassword";
import { PrivateRoute } from "./utilities/privateRoute";
import { ToastContainer } from "react-toastify";
import "react-notifications/lib/notifications.css";
import "./main.css";
import { Router, Route, browserHistory } from "react-router";
import Home from "./Components/Home";
import Page404 from "./Components/Page404";

class App extends Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = localStorage.getItem("isAuthenticated");
  }
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={UserRegistration} />
          <Route path="/login" component={UserSignIn} />
          <Route path="/business-profile" component={BusinessProfile} />
          <Route path="/businesses" component={Businesses} />
          <PrivateRoute
            path="/my-businesses"
            isAuthenticated={this.isAuthenticated}
            component={MyBusinesses}
          />
          <PrivateRoute
            path="/register-business"
            isAuthenticated={this.isAuthenticated}
            component={RegisterBusiness}
          />
          <Route path="/business/:id" component={BusinessProfile} />
          <PrivateRoute
            path="/update-business/:id"
            isAuthenticated={this.isAuthenticated}
            component={UpdateBusinessProfile}
          />
          <Route path="/reset/:token" component={Reset} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="*" component={Page404} />
          <ToastContainer />
        </Router>
      </div>
    );
  }
}

export default App;
