import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SingleBusiness from "./SingleBusiness";
import JwPagination from "jw-react-pagination";
import { localApi } from "../utilities/api";

/**
 * Fetches all businesses
 */
class Businesses extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      businesses: [],
      pageOfItems: [],
      queryType: "q",
      query: ""
    };
  }

  componentDidMount() {
    let queryType, query;
    console.log(this.props);
    if (this.props.location.searchProps) {
      queryType = this.props.location.searchProps.queryType;
      query = this.props.location.searchProps.query;
    }
    this.handleSearch(queryType, query);
  }

  /**
   * Handles pagination
   * @param pageOfItems 
   */
  onChangePage(pageOfItems) {
    this.setState({
      pageOfItems
    });
  }

  /**
   * Handles search for all businesses
   */
  handleSearch = (queryType, query) => {
    axios
      .get(`${localApi}businesses?${queryType}=${query}`)
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
              <form
                className="flex-grow"
                onSubmit={event => {
                  event.preventDefault();
                  const query = event.target.elements.businessName.value;
                  const queryType = event.target.elements.search_item.value;
                  this.handleSearch(queryType, query);
                }}
              >
                <div className="input-group">
                  <select
                    className="custom-select"
                    id="inputGroupSelectBusiness"
                    name="search_item"
                  >
                    <option value="q">Business Name</option>
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
            {/**
            Render single business  */}
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
export default Businesses;
