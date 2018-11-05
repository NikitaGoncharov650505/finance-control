import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.styles.css';

export default class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-page">
                <div className="sign-up-title">Sign Up</div>
                <form className="sign-up-form">
                    <input type="text" placeholder="E-mail" className="sign-up-input"/>
                    <input type="password" placeholder="Password" className="sign-up-input"/>
                    <input type="password" placeholder="Confirm Password" className="sign-up-input"/>
                    <Link to='/sign-up' className="sign-up-submit">Submit</Link>
                </form>
            </div>
        );
    }
};