import React from "react";
import PropTypes from "prop-types";
import user_avatar from "../static/img/users/user_avatar.png";

const SingleReview = ({ review }) => (
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
      <h4>{review.review_title}</h4>
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
      <em className="text-muted">{review.date_reviewed}</em>
      <br />
      <p>{review.review_text}</p>
      <hr />
    </div>
  </div>
);

SingleReview.propTypes = {
  review: PropTypes.object
};
export default SingleReview;
