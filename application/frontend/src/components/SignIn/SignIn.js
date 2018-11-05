import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.styles.css';

export default class SignIn extends Component {
    render() {
        return (
            <div className="sign-in-page">
                <div className="sign-in-title">Sign In</div>
                <form className="sign-in-form">
                    <input type="text" placeholder="E-mail" className="sign-in-input"/>
                    <input type="password" placeholder="Password" className="sign-in-input"/>
                    <Link to='/sign-in' className="sign-in-submit">Submit</Link>
                </form>
            </div>
        );
    }
};