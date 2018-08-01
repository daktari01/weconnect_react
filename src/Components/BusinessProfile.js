import React, { Component, Fragment } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import SignedInNav from "./SignedInNav";
import Footer from "./Footer";
import SingleReview from "./SingleReview";
import company_logo from "../static/img/logos/weConnectCircle.png";

class BusinessProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      modal: false,
      deleteModal: false,
      reviewTitle: "",
      reviewText: ""
    };
    this.toggle = this.toggle.bind(this);
    this.deleteToggle = this.deleteToggle.bind(this);
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
    const token = localStorage.getItem("access_token");
    console.log(localStorage.getItem("access_token"));
    if (token) {
      this.setState({ logged_in: true });
    }
  }
  deleteToggle() {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    const businessId = this.props.match.params.id;
    event.preventDefault();
    const newReview = {
      review_title: this.state.reviewTitle,
      review_text: this.state.reviewText
    };
    const access_token = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:5000/api/v2/businesses/" + businessId + "/reviews",
        newReview,
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "x-access-token": access_token
          }
        }
      )
      .then(response => {
        console.log(response.data);
        return <Redirect to={"/business/" + businessId} />;
      })
      .catch(error => {
        console.log(error);
      });
    this.toggle();
  };
  handleDelete = event => {
    const businessId = this.props.match.params.id;
    event.preventDefault();
    const access_token = localStorage.getItem("access_token");
    axios
      .delete(
        "http://localhost:5000/api/v2/businesses/" + businessId,
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "x-access-token": access_token
          }
        }
      )
      .then(response => {
        console.log(response.data);
        return <Redirect to={"/my-businesses"} />;
      })
      .catch(error => {
        console.log(error);
      });
      this.deleteToggle();
  };
  render() {
    const { business, reviews } = this.state;
    const review = reviews.map(review => (
      <SingleReview review={review} key={review.review_id} />
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
                    onClick={this.toggle}
                  >
                    Add a Review
                  </a>
                  {this.state.logged_in && (
                    <Fragment>
                      <Link
                        to={"/update-business/" + business.id}
                        className="btn btn-primary review-button"
                      >
                        Update Business
                      </Link>
                      <a
                        href="#"
                        className="btn btn-danger review-button"
                        onClick={this.deleteToggle}
                      >
                        Delete Business
                      </a>
                    </Fragment>
                  )}
                </div>
                {/* <!-- Review Modal --> */}
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader className="modal_name" toggle={this.toggle}>
                    <h2>{business.name}</h2>
                  </ModalHeader>
                  <ModalBody>
                    <h4 className="company_name" id="modalCompanyName">
                      Give a review on {business.name}
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
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Review Title"
                          name="reviewTitle"
                          value={this.state.reviewTitle}
                          onChange={this.handleChange}
                        />
                        <br />

                        <textarea
                          className="form-control"
                          id="reviewTextarea1"
                          rows="3"
                          placeholder="Tell us more..."
                          name="reviewText"
                          value={this.state.reviewText}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handleSubmit}
                    >
                      Submit Review
                    </button>
                  </ModalFooter>
                </Modal>
                {/* Delete modal */}
                <Modal
                  isOpen={this.state.deleteModal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.deleteToggle}>
                    Delete {business.name}
                  </ModalHeader>
                  <ModalBody>
                    Are you sure you want to delete {business.name}? This action
                    cannot be undone
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      id="deleteBusiness"
                      onClick={this.handleDelete}
                    >
                      Delete {business.name}
                    </Button>{" "}
                    <Button
                      color="primary"
                      onClick={this.deleteToggle}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
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
