import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegistration from './Components/UserRegistration';
import UserSignIn from './Components/UserSignIn';
import MyBusinesses from './Components/MyBusinesses';
import BusinessProfile from './Components/BusinessProfile';
import RegisterBusiness from './Components/RegisterBusiness';
import UpdateBusinessProfile from './Components/UpdateBusinessProfile';
import { PrivateRoute } from './utilities/privateRoute';
import 'react-notifications/lib/notifications.css';
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
          <Route path='/business-profile' component={BusinessProfile} />
          <Route path='/my-businesses' component={MyBusinesses}/>
          <Route path='/register-business' component={RegisterBusiness}/>
          <Route path='/business/:id' component={BusinessProfile}/>
          <Route path='/update-business/:id' component={UpdateBusinessProfile}/>
          {/* <PrivateRoute path='/my-businesses' component={MyBusinesses}/>
          <PrivateRoute path='/register-business' component={RegisterBusiness}/>
          <PrivateRoute path='/business-profile' component={BusinessProfile} /> */}
      </div>
    );
  }
}

export default App;
