import React, { Component } from 'react';
import logo from '../static/img/logos/weConnect.png';

class UnsignedInNav extends Component{
    render(){
        return(
            <div id="app" className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-faded">
                    <a className="navbar-brand" href="/">
                        <img src={logo} class="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNavDropdown" class="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default UnsignedInNav;