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
                                    <label htmlFor="loginEmail">Username</label>
                                    <input type="text" className="form-control" id="loginUsernameInput" placeholder="Enter username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loginPassword">Password</label>
                                    <input type="password" className="form-control" id="loginPasswordInput" placeholder="Password"/>
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