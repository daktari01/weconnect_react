import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import logo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";
import { toast } from "react-toastify";

/**
 * Class to handle update business
 */
class UpdateBusinessProfile extends Component {
  state = {
    businessName: "",
    businessCategory: "",
    businessLocation: "",
    webAddress: "",
    fireRedirect: false
  };

  /**
   * Populate the inputs with data from the db
   */
  componentDidMount() {
    const businessId = this.props.match.params.id;
    axios
      .get(localApi + "businesses/" + businessId, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        const business = response.data;
        this.setState({
          businessName: business.name,
          businessCategory: business.category,
          businessLocation: business.location,
          webAddress: business.web_address
        });
      })
      .catch(() => {
        toast.error("WeConnect was unable to fetch the business.");
      });
  }

  /**
   * Handle onChange event for inputs
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      businessCategory: this.menu.value
    });
  };

  /**
   * Handle the submit function
   */
  handleSubmit = event => {
    const businessId = this.props.match.params.id;
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
      .put(localApi + "businesses/" + businessId, newBusiness, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(() => {
        toast.success(newBusiness.name + " updated successfully");
        this.setState({ fireRedirect: true });
      })
      .catch(() => {
        toast.error("WeConnect was unable to update " + newBusiness.name);
      });
  };

  render() {
    const { fireRedirect } = this.state;
    const businessId = this.props.match.params.id;
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container col-min-6" id="loginContainer">
            <div className="wrapper" id="loginWrapper">
              <form onSubmit={this.handleSubmit}>
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
                    ref={input => (this.menu = input)}
                    onChange={() => this.handleChange}
                    defaultValue={this.state.category}
                  >
                    <option value="IT">IT</option>
                    <option value="Agribusiness">Agribusiness</option>
                    <option value="Travel">Travel</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Fashion">Fashion</option>
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
                <button type="submit" className="btn btn-primary btn-block">
                  Update
                </button>
                <br />
              </form>
            </div>
          </div>
        </section>
        <Footer />
        {fireRedirect && <Redirect to={"/business/" + businessId} />}
      </div>
    );
  }
}
UpdateBusinessProfile.propTypes = {
  match: PropTypes.object
};
export default UpdateBusinessProfile;
