import React, { Component } from 'react';
import axios from 'axios';
import SignedInNav from './SignedInNav';
import Footer from './Footer';
import SingleBusiness from './SingleBusiness';

class UpdateBusinessProfile extends Component {
    state = {
        businessName: '',
        businessCategory: 'travel',
        businessLocation: '',
        webAddress: '',
        fireRedirect: false
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };
    handleSubmit = event => {
        event.preventDefault();
        const newBusiness = {
            name: this.state.businessName,
            category: this.state.businessCategory,
            location: this.state.businessLocation,
            web_address: this.state.webAddress
        };
        const access_token = localStorage.getItem('access_token')
        // Make POST request
        // axios.post('http://daktari01-weconnect.herokuapp.com/api/v2/businesses', {newBusiness})
        axios.post('http://localhost:5000/api/v2/businesses', newBusiness,{headers:{Accept:'application/json', 'Content-type':'application/json', 'x-access-token':access_token}})
        .then(response => {
            console.log(response.data)
            this.setState({ fireRedirect: true });
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const { fireRedirect } = this.state;
        return (
            <div>
                <section id="body">
                    <SignedInNav />