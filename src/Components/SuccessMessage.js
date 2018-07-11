import React, { Component } from 'react';

class SuccessMessage extends Component {
    render(){
        return(
            <div className="alert alert-success" role="alert">
                This is a success alert—check it out!
            </div>
        )
    }
}
export default SuccessMessage;