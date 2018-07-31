import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import SignedInNav from "./SignedInNav";
import Footer from "./Footer";
import SingleReview from "./SingleReview";
import company_logo from "../static/img/logos/weConnectCircle.png";

class BusinessProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
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
        this.setState({ business: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    // axios.get("http://daktari01-weconnect.herokuapp.com/api/v2/businesses")
    axios
      .get(
        "http://localhost:5000/api/v2/businesses/" + businessId + "/reviews",
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          }
        }
      )
      .then(response => {
        const reviews = response.data.reviews;
        this.setState({ reviews });
        console.log(reviews);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { business, reviews } = this.state;
    const review = reviews.map(review =>(
      <SingleReview review={review} key={review.review_id}/>
    ));
    return (
      <div>
        <section id="body">
          <SignedInNav />
          {business ? (
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
                      <a href={business.web_address} target="__blank">
                        {business.web_address}
                      </a>
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
                  <Link
                    to={"/update-business/" + business.id}
                    className="btn btn-primary review-button"
                  >
                    Update Business
                  </Link>
                  <a href="#" className="btn btn-danger review-button">
                    Delete Business
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
                          {business.name}
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
                  {review}
                </div>
              </div>
            </div>
          ) : (
            <h2>Loading ...</h2>
          )}
        </section>
        <Footer />
      </div>
    );
  }
}
export default BusinessProfile;
