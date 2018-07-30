import React, { Component } from 'react';
import axios from 'axios';
import SignedInNav from './SignedInNav';
import Footer from './Footer';
import SingleBusiness from './SingleBusiness';

class MyBusinesses extends Component {
    state = {
        businesses: []
    }
    componentDidMount() {
        // axios.get("http://daktari01-weconnect.herokuapp.com/api/v2/businesses")
        axios.get("http://localhost:5000/api/v2/businesses")
            .then(response => {
                const businesses = response.data.businesses;
                this.setState({ businesses })
                console.log(businesses)
            })
            .catch(error => {
                console.log(error)
             })
    }
    
    render() {
        const { businesses } = this.state;
        const business = businesses.map((business) => <SingleBusiness business={business} key={business.id} />);
        return (
            <div>
                <section id="body">
                    <SignedInNav />
                    <div className="container">
                        {/* <!-- Search bar --> */}
                        <div className="row" id="search_business">
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelectBusiness">
                                    <option selected>Search by ...</option>
                                    <option value="1">Business Name</option>
                                    <option value="2">Business Location</option>
                                    <option value="3">Business Category</option>
                                </select>
                                <input type="text" id="search_input" className="form-control" placeholder="Enter Search Text" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" id="btn_search_business" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Search items --> */}
                        <div className="row">
                            {business}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default MyBusinesses;