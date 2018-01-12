import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
// import Search from './Search';
// import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/(access_token.*)?' component={ Home } />
        <Route path='/dashboard' component={ Dashboard } />
        {/* {/* <Route path='/search' component={ Search } /> */}
        <Route path='/profile' component={ Profile } />
        {/* <Route path='/logout' component={ Logout } /> */}
        
      </div>
    );
  }
}

export default App;
