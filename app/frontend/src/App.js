import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import Account from './components/Account/Account.js';
import EditInvestment from './components/EditInvestment/EditInvestment.js';
import CreateInvestment from './components/CreateInvestment/CreateInvestment.js';

import './App.css';

const Auth = new AuthService();

class App extends Component {

  handleLogout = () => {
    Auth.logout()
    this.props.history.replace('/');
  }

  render() {
    return (
      <Router>
        <div>
          <Header handleLogout={this.handleLogout} />
          <div className="app-wrapper">
              <Route path="/account" render={() => <Account user={this.props.user} />} />
              <Route path="/edit-investment/:id" component={EditInvestment} />   
              <Route path="/create-investment/:id" component={CreateInvestment} /> 
            </div>
        </div>
      </Router>
    );
  }
}

export default withAuth(App);
