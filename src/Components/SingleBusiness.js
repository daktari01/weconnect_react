import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import company_logo from "../static/img/logos/weConnectCircle.png";

const SingleBusiness = ({ business }) => (
  <div className="col-md-4">
    <div className="white-bg search_item shadow p-3 mb-5 rounded">
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
          <a href={business.web_address}>{business.web_address}</a>
        </dd>
      </dl>
      <Link
        to={"business/" + business.id}
        className="btn btn-primary review-button"
      >
        Manage Business
      </Link>
    </div>
  </div>
);

SingleBusiness.propTypes = {
  business: PropTypes.object
};
export default SingleBusiness;
