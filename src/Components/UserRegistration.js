import React, { Component } from 'react';
import UnsignedInNav from './UnsignedInNav';
import Footer from './Footer';
import signInLogo from '../static/img/logos/weConnect.png'

class UserRegistration extends Component {
    render(){
        return(
            <div>
                <section id="body">
                    <UnsignedInNav />
                    <div className="container d-flex p-2 col-min-6" id="loginContainer">
                        <div className="wrapper" id="loginWrapper">
                            <form>
                                <div className="col-sm-12" id="loginLogo">
                                    <img className="img-fluid" alt="logo" src={signInLogo}/>
                                </div>
                                <div className="form-group">
                                    <label for="loginEmail">First name</label>
                                    <input type="text" className="form-control" id="loginEmailInput" aria-describedby="emailHelp" placeholder="Enter first name"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginEmail">Last name</label>
                                    <input type="text" className="form-control" id="loginEmailInput" aria-describedby="emailHelp" placeholder="Enter last name"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginEmail">Email address</label>
                                    <input type="email" className="form-control" id="loginEmailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginUsername">Username</label>
                                    <input type="text" className="form-control" id="loginUsernameInput" aria-describedby="emailHelp" placeholder="Enter username"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginPassword">Password</label>
                                    <input type="password" className="form-control" id="loginPasswordInput" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="loginConfirmPasswordInput" placeholder="Confirm password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                <p>Have an account? <a href="login">Login</a></p>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default UserRegistration;