import React, { Component } from 'react';

class ErrorMessage extends Component {
    render(){
        return(
            <div className="alert alert-danger" role="alert">
                This is an error alert—check it out!
            </div>
        )
    }
}
export default ErrorMessage;