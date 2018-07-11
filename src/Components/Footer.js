import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <span>WeConnect &copy;2018. All rights reserved. Designed and maintained by Daktari Technologies.</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;