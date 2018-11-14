import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import './App.css';

const Auth = new AuthService();

class App extends Component {

  handleLogout = () => {
    Auth.logout()
    this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <Header handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default withAuth(App);
