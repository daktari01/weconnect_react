import React, { Component } from 'react';

class InfoMessage extends Component {
    render(){
        return(
            <div className="alert alert-info" role="alert">
                This is an info alert—check it out!
            </div>
        )
    }
}
export default InfoMessage;