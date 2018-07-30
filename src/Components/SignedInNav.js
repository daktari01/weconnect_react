import React, { Component } from 'react';
import logo from '../static/img/logos/weConnect.png';

class SignedInNav extends Component{
    render(){
        return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-faded">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="logo" alt="WeConnect logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/register-business">Register business <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

export default SignedInNav;