import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import logo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

class RegisterBusiness extends Component {
  state = {
    businessName: "",
    businessCategory: "travel",
    businessLocation: "",
    webAddress: "",
    businessId: "",
    fireRedirect: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };
  handleSubmit = event => {
    event.preventDefault();
    const newBusiness = {
      name: this.state.businessName,
      category: this.state.businessCategory,
      location: this.state.businessLocation,
      web_address: this.state.webAddress
    };
    const access_token = localStorage.getItem("access_token");
    // Make POST request
    axios
      .post(localApi + "businesses", newBusiness, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(response => {
        window.location.reload();
        console.log(response.data);
        this.setState({ businessId: response.data.id, fireRedirect: true });
      })
      .catch(error => {
        console.log(error);
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
                  <img className="img-fluid" alt="logo" src={logo} />
                </div>
                <div className="form-group">
                  <label htmlFor="loginFName">Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="businessNameInput"
                    value={this.state.businessName}
                    name="businessName"
                    onChange={this.handleChange}
                    placeholder="Enter business name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Select Category</label>
                  <select
                    className="custom-select"
                    id="inputGroupSelectBusiness"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="it">IT</option>
                    <option value="agribusiness">Agribusiness</option>
                    <option value="travel">Travel</option>
                    <option value="hospitality">Hospitality</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Business Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="businessLocationInput"
                    value={this.state.businessLocation}
                    name="businessLocation"
                    onChange={this.handleChange}
                    placeholder="Enter business location"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginEmail">Web Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="webAddressInput"
                    value={this.state.webAddress}
                    name="webAddress"
                    onChange={this.handleChange}
                    placeholder="Enter web address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.handleSubmit}
                >
                  Register
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
        <Footer />
        {fireRedirect && <Redirect to={"/business/" + this.state.businessId} />}
      </div>
    );
  }
}
export default RegisterBusiness;
