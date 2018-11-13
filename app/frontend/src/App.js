import React, { Component } from 'react';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);
