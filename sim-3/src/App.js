import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/(access_token.*)?' component={ Home } />
        <Route path='/dashboard' component={ Dashboard } />
       
      </div>
    );
  }
}

export default App;
