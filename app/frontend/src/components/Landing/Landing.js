import React, { Component } from 'react';
import AuthService from '../AuthService';

class Landing extends Component {
    constructor(){
        super();
        this.Auth = new AuthService();
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/account');
    }
    render() {
        return (
            <div className="center">
                <a href="/login">Sign In</a> 
            </div>
        );
    }
}

export default Landing;