import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegistration from './Components/UserRegistration';
import UserSignIn from './Components/UserSignIn';
import './main.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={UserRegistration} />
          <Route path='/login' component={UserSignIn} />
      </div>
    );
  }
}

export default App;
