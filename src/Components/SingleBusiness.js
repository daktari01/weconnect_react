import React from 'react';
import PropTypes from 'prop-types';

const SingleBusiness = ({ business }) => (
    <div className="col-sm-4 ">
        <div className="white-bg search_item">
            <h3 className="company_name">{business.name}</h3>
            <img src="company_logo"
                className="mx-auto img-fluid img-circle d-block"
                id="company_logo"
                alt="avatar" />
            <br />
            <div className="star-rating">
                <span className="fa fa-star-o" data-rating="1"></span>
                <span className="fa fa-star-o" data-rating="2"></span>
                <span className="fa fa-star-o" data-rating="3"></span>
                <span className="fa fa-star-o" data-rating="4"></span>
                <span className="fa fa-star-o" data-rating="5"></span>
                <input type="hidden" name="whatever1" className="rating-value" value="2.56" />
            </div>
            <dl>
                <dt>Category:</dt> <dd>{business.category}</dd>
                <dt>Location:</dt> <dd>{business.location}</dd>
                <dt>Website:</dt> <dd><a href="#">{business.website}</a></dd>
            </dl>
            <a href="business_profile.html" className="btn btn-primary review-button">Manage Business</a>
        </div>
    </div>
)

SingleBusiness.propTypes = {
    business: PropTypes.object
}
export default SingleBusiness;