import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SingleBusiness from "./SingleBusiness";
import JwPagination from "jw-react-pagination";
import { localApi } from "../utilities/api";

class MyBusinesses extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      businesses: [],
      pageOfItems: []
    };
  }

  componentDidMount() {
    const access_token = localStorage.getItem("access_token");
    axios
      .get("http://localhost:5000/api/v2/my-businesses", {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(response => {
        const businesses = response.data.businesses;
        this.setState({ businesses });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onChangePage(pageOfItems) {
    this.setState({
      pageOfItems
    });
  }

  handleSearch = event => {
    event.preventDefault();
    const name = event.target.elements.businessName.value;
    const search_item = event.target.elements.search_item.value;
    const access_token = localStorage.getItem("access_token");
    let search_by = "";

    if (search_item === "name") {
      search_by = "q";
    } else if (search_item === "location") {
      search_by = "location";
    } else {
      search_by = "category";
    }

    axios
      .get(`${localApi}my-businesses?${search_by}=${name}`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": access_token
        }
      })
      .then(response => {
        const businesses = response.data.businesses;
        this.setState({ businesses });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container">
            {/* <!-- Search bar --> */}
            <div className="row" id="search_business">
              <form className="flex-grow" onSubmit={this.handleSearch}>
                <div className="input-group">
                  <select
                    className="custom-select"
                    id="inputGroupSelectBusiness"
                    name="search_item"
                  >
                    <option value="name">Business Name</option>
                    <option value="location">Business Location</option>
                    <option value="category">Business Category</option>
                  </select>

                  <input
                    type="text"
                    id="search_input"
                    name="businessName"
                    className="form-control"
                    placeholder="Enter Search Text"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      id="btn_search_business"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- Search items --> */}
            {this.state.pageOfItems.length > 0 ? (
              <div className="row">
                {this.state.pageOfItems.map(business => (
                  <SingleBusiness business={business} key={business.id} />
                ))}
              </div>
            ) : (
              <div className="no-business white-bg">
              <br />
              <br />
              <br />
              <h4>There are no businesses matching this query.</h4>
              <br />
              <a className="btn btn-primary" href="/businesses">
                See all businesses
              </a>
            </div>
            )}
          </div>
          <br />
          <div className="row mypagination h-100 justify-content-center align-items-center">
            <JwPagination
              items={this.state.businesses}
              onChangePage={this.onChangePage}
              pageSize={6}
              style="margin: 0px 10px 10px 10px;padding: 0px;display: inline-block;"
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default MyBusinesses;
