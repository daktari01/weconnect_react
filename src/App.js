import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import UserRegistration from './Components/UserRegistration';
import UserSignIn from './Components/UserSignIn';
import Businesses from './Components/Businesses';
import MyBusinesses from './Components/MyBusinesses';
import BusinessProfile from './Components/BusinessProfile';
import RegisterBusiness from './Components/RegisterBusiness';
import UpdateBusinessProfile from './Components/UpdateBusinessProfile';
import ResetPassword from './Components/ResetPassword';
import { PrivateRoute } from './utilities/privateRoute';
import {ToastContainer} from 'react-toastify';
import 'react-notifications/lib/notifications.css';
import './main.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Page404 from './Components/Page404';


class App extends Component {
  render() {
    return (
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={UserRegistration} />
          <Route path='/login' component={UserSignIn} />
          <Route path='/business-profile' component={BusinessProfile} />
          <Route path='/businesses' component={Businesses}/>
          <Route path='/my-businesses' component={MyBusinesses}/>
          <Route path='/register-business' component={RegisterBusiness}/>
          <Route path='/business/:id' component={BusinessProfile}/>
          <Route path='/update-business/:id' component={UpdateBusinessProfile}/>
          <Route path='/reset-password' component={ResetPassword}/>
          <Route path='/page404' component={Page404}/>
          <ToastContainer />
          {/* <PrivateRoute path='/my-businesses' component={MyBusinesses}/>
          <PrivateRoute path='/register-business' component={RegisterBusiness}/>
          <PrivateRoute path='/business-profile' component={BusinessProfile} /> */}
      </div>
    );
  }
}

export default App;
