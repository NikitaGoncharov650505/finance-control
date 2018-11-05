import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navigation">
                    <Link className="navigation-link" to='/' activeStyle={{color:"green", fontWeight:"bold"}}>Log out</Link>
                </nav>  
            </div> 
        );
    }
};