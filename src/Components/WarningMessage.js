import React, { Component } from 'react';

class WarningMessage extends Component {
    render(){
        return(
            <div className="alert alert-warning" role="alert">
                This is a warning alert—check it out!
            </div>
        )
    }
}
export default WarningMessage;