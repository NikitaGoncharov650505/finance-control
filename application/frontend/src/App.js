import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
