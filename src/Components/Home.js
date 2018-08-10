import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

/**
 * Handle the Home page
 */
class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      queryType: "q",
      fireRedirect: false,
      query: "",
      activeTab: "q"
    };
  }

  /**
   * Handles onchange event for search input boxes
   */
  handleInput = event => {
    this.setState({
      query: event.target.value
    });
  };

  /**
   * Handles the search buttons for the search
   */
  handleSearch = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true });
  };

  /**
   * Handle the search box
   * @param tab
   */
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        queryType: tab
      });
    }
  }
  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <section id="body">
          <NavBar />
          <div className="container">
            <div className="d-flex searchContainer" id="loginContainer">
              <div
                id="loginWrapper"
                className="justify-content-center align-self-center"
              >
                <div className="search-box white-bg" id="indexSearchBox">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "q"
                        })}
                        onClick={() => {
                          this.toggle("q");
                        }}
                      >
                        Business Name
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "location"
                        })}
                        onClick={() => {
                          this.toggle("location");
                        }}
                      >
                        Business Location
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "category"
                        })}
                        onClick={() => {
                          this.toggle("category");
                        }}
                      >
                        Business Category
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="q">
                      <Row>
                        <Col sm="12">
                          <div
                            className="tab-pane fade show active"
                            id="pills-name"
                            role="tabpanel"
                            aria-labelledby="pills-name-tab"
                          >
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control inputSearch"
                                placeholder="Search business by name ..."
                                aria-label="pills-name-input"
                                aria-describedby="basic-addon2"
                                name="inputName"
                                onChange={this.handleInput}
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-secondary btnSearch"
                                  type="button"
                                  onClick={this.handleSearch}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="location">
                      <Row>
                        <Col sm="12">
                          <div
                            className="tab-pane fade show active"
                            id="pills-name"
                            role="tabpanel"
                            aria-labelledby="pills-name-tab"
                          >
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control inputSearch"
                                placeholder="Search business by location ..."
                                aria-label="pills-name-input"
                                aria-describedby="basic-addon2"
                                name="inputLocation"
                                onChange={this.handleInput}
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-secondary btnSearch"
                                  type="button"
                                  onClick={this.handleSearch}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="category">
                      <Row>
                        <Col sm="12">
                          <div
                            className="tab-pane fade show active"
                            id="pills-name"
                            role="tabpanel"
                            aria-labelledby="pills-name-tab"
                          >
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control inputSearch"
                                placeholder="Search business by category ..."
                                aria-label="pills-name-input"
                                aria-describedby="basic-addon2"
                                name="inputCategory"
                                onChange={this.handleInput}
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-secondary btnSearch"
                                  type="button"
                                  onClick={this.handleSearch}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </section>
        {fireRedirect && (
          <Redirect to={{ pathname: "/businesses", searchProps: this.state }} />
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
