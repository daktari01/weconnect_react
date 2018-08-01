import React, { Component } from "react";
import axios from "axios";
import SignedInNav from "./SignedInNav";
import Footer from "./Footer";
import SingleBusiness from "./SingleBusiness";
import JwPagination from "jw-react-pagination";

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
    // axios.get("http://daktari01-weconnect.herokuapp.com/api/v2/businesses")
    axios
      .get("http://localhost:5000/api/v2/businesses")
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
    let search_by = "";

    if (search_item === "name") {
      search_by = "q";
    } else if (search_item === "location") {
      search_by = "location";
    } else {
      search_by = "category";
    }

    axios
      .get(`http://localhost:5000/api/v2/businesses?${search_by}=${name}`)
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
          <SignedInNav />
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
            <div className="row">
              {this.state.pageOfItems.map(business => (
                <SingleBusiness business={business} key={business.id} />
              ))}
            </div>
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
