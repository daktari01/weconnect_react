import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SignedInNav from "./SignedInNav";
import Footer from "./Footer";
import SingleBusiness from "./SingleBusiness";
import signInLogo from "../static/img/logos/weConnect.png";
import logo from "../static/img/logos/weConnect.png";
import { localApi } from "../utilities/api";

class UpdateBusinessProfile extends Component {
  state = {
    businessName: "",
    businessCategory: "",
    businessLocation: "",
    webAddress: "",
    fireRedirect: false
  };
  componentDidMount() {
    const businessId = this.props.match.params.id;
    axios
      .get("http://localhost:5000/api/v2/businesses/" + businessId, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
        const business = response.data;
        this.setState({
          businessName: business.name,
          businessCategory: business.category,
          businessLocation: business.location,
          webAddress: business.web_address
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state);
  };
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
    // axios.post('http://daktari01-weconnect.herokuapp.com/api/v2/businesses', {newBusiness})
    axios
      .put(localApi + "businesses/" + businessId, newBusiness, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ fireRedirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { fireRedirect } = this.state;
    const businessId = this.props.match.params.id;
    return (
      <div>
        <section id="body">
          <SignedInNav />
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
                <div className="form-group">
                  <label htmlFor="loginEmail">Upload Logo</label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile"
                      >
                        Choose file
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text" id="upload_logo">
                        Upload
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.handleSubmit}
                >
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
export default UpdateBusinessProfile;
