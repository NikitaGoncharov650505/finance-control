import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import AuthService from '../AuthService';
import './Landing.styles.css';

class Landing extends Component {
    constructor(){
        super();
        this.Auth = new AuthService();
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/account');
    }

    signup = () => {
        const { history } = this.props;
        history.push({
          pathname: '/signup',
        }); 
    }

    signin = () => {
        const { history } = this.props;
        history.push({
          pathname: '/login',
        }); 
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-header">
                    <div className="landing-navigation">
                        <Button color="secondary" onClick={this.signin}>Sign In</Button>
                        <Button color="secondary" onClick={this.signup}>Sign Up</Button>
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

export default withRouter(Landing);
