import React, { Component } from 'react';
import UnsignedInNav from './UnsignedInNav';
import Footer from './Footer';
import signInLogo from '../static/img/logos/weConnect.png'

class UserSignIn extends Component {
    render(){
        return(
            <div>
                <section id="body">
                    <UnsignedInNav />
                    <div className="container col-min-6" id="loginContainer">
                        <div className="wrapper" id="loginWrapper">
                            <form>
                                <div className="col-sm-12" id="loginLogo">
                                    <img className="img-fluid" alt="logo" src={signInLogo}/>
                                </div>
                                <div className="form-group">
                                    <label for="loginEmail">Email address</label>
                                    <input type="email" className="form-control" id="loginEmailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label for="loginPassword">Password</label>
                                    <input type="password" className="form-control" id="loginPasswordInput" placeholder="Password"/>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberCheckInput"/>
                                    <label className="form-check-label" for="rememberCheck">Remember me</label>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                <br />
                                <p>Do not have an account? <a href="/register">Register</a></p>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default UserSignIn;