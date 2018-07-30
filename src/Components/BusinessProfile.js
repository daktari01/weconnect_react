import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SignedInNav from "./SignedInNav";
import Footer from "./Footer";
import company_logo from "../static/img/logos/weConnectCircle.png";
import user_avatar from "../static/img/users/user_avatar.png";

class BusinessProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const businessId = this.props.match.params.id;
    axios
      .get("http://localhost:5000/api/v2/businesses/"+businessId, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ business: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {business} = this.state
    return (
      <div>
        <section id="body">
          <SignedInNav />
          {business ? 
          <div className="container white-bg">
            <div className="row my-2 top-row">
              <div className="col-sm-4">
                <h3 className="company_name">{business.name}</h3>
                <img
                  src={company_logo}
                  className="mx-auto img-fluid img-circle d-block"
                  id="company_logo"
                  alt="avatar"
                />
                <br />
                <div className="star-rating">
                  <span className="fa fa-star-o" data-rating="1" />
                  <span className="fa fa-star-o" data-rating="2" />
                  <span className="fa fa-star-o" data-rating="3" />
                  <span className="fa fa-star-o" data-rating="4" />
                  <span className="fa fa-star-o" data-rating="5" />
                  <input
                    type="hidden"
                    name="whatever1"
                    className="rating-value"
                    value="2.56"
                  />
                </div>
                <dl>
                  <dt>Category:</dt> <dd>{business.category}</dd>
                  <dt>Location:</dt> <dd>{business.location}</dd>
                  <dt>Website:</dt>{" "}
                  <dd>
                    <a href={business.web_address} target="__blank">{business.web_address}</a>
                  </dd>
                </dl>
                <a
                  href="#"
                  className="btn btn-primary review-button"
                  data-toggle="modal"
                  data-target="#reviewModal"
                >
                  Add a Review
                </a>
                <a
                  href="update_business.html"
                  className="btn btn-primary review-button"
                >
                  Update Profile
                </a>
                <a href="#" className="btn btn-danger review-button">
                  Delete Profile
                </a>
              </div>
              {/* <!-- Review Modal --> */}
              <div
                className="modal fade"
                id="reviewModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="reviewModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title company_name"
                        id="reviewModalLabel"
                      >
                        Review A Business
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h4 className="company_name" id="modalCompanyName">
                        Company Name
                      </h4>
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={company_logo}
                            className="mx-auto img-fluid img-circle d-block"
                            id="company_logo"
                            alt="avatar"
                          />
                        </div>
                        <div className="col-sm-8">
                          <div className="star-rating">
                            <span className="fa fa-star-o" data-rating="1" />
                            <span className="fa fa-star-o" data-rating="2" />
                            <span className="fa fa-star-o" data-rating="3" />
                            <span className="fa fa-star-o" data-rating="4" />
                            <span className="fa fa-star-o" data-rating="5" />
                            <input
                              type="hidden"
                              name="whatever1"
                              className="rating-value"
                              value="2.56"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Review Title"
                            aria-describedby="basic-addon1"
                          />
                          <textarea
                            className="form-control"
                            id="reviewTextarea1"
                            rows="3"
                            placeholder="Tell us more..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 " id="reviews">
                <h3>Reviews for {business.name}</h3>
                <div id="review_item" className="row">
                  <div className="col-sm-3 pull-left" id="user_holder">
                    <img
                      src={user_avatar}
                      id="user_avatar"
                      className="mx-auto img-fluid img-circle d-block"
                      alt="avatar"
                    />
                  </div>
                  <div className="col-sm-9 pull-right">
                    <h4>Rating Title</h4>
                    <div className="star-rating pull-left">
                      <span className="fa fa-star-o" data-rating="1" />
                      <span className="fa fa-star-o" data-rating="2" />
                      <span className="fa fa-star-o" data-rating="3" />
                      <span className="fa fa-star-o" data-rating="4" />
                      <span className="fa fa-star-o" data-rating="5" />
                      <input
                        type="hidden"
                        name="whatever1"
                        className="rating-value"
                        value="2.56"
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <hr />
                  </div>
                </div>
                <div id="review_item" className="row">
                  <div className="col-sm-3 pull-left" id="user_holder">
                    <img
                      src={user_avatar}
                      id="user_avatar"
                      className="mx-auto img-fluid img-circle d-block"
                      alt="avatar"
                    />
                  </div>
                  <div className="col-sm-9 pull-right">
                    <h4>Rating Title</h4>
                    <div className="star-rating pull-left">
                      <span className="fa fa-star-o" data-rating="1" />
                      <span className="fa fa-star-o" data-rating="2" />
                      <span className="fa fa-star-o" data-rating="3" />
                      <span className="fa fa-star-o" data-rating="4" />
                      <span className="fa fa-star-o" data-rating="5" />
                      <input
                        type="hidden"
                        name="whatever1"
                        className="rating-value"
                        value="2.56"
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <h2>Loading ...</h2>
          }
        </section>
        <Footer />
      </div>
    );
  }
}
export default BusinessProfile;
