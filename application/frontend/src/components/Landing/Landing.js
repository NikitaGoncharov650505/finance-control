import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.styles.css';

export default class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="landing-header">
                    <div className="landing-navigation">
                        <button><Link className="landing-navigation-link" to='/sign-in'>Sign In</Link></button>
                        <button><Link className="landing-navigation-link" to='/sign-up'>Sign Up</Link></button>
                    </div>
                </div>
                <div className="landing-content">
                    <div>
                        Landing
                    </div>
                </div>   
            </div>
        );
    }
};