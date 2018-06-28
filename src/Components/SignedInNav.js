import React, { Component } from 'react';
import logo from '../static/img/logos/weConnect.png';

class SignedInNav extends Component{
    render(){
        return(
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-faded">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" class="navbar-collapse collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="register_business.html">Register business <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

export default SignedInNav;