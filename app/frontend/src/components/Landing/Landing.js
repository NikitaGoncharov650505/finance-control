import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Row,
    Col,
    Button,
} from 'reactstrap';
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
                <Row>
                    <Col
                        xs={{ size: 8, offset: 2 }}
                        sm={{ size: 6, offset: 3 }}
                        md={{ size: 6, offset: 3 }}
                        lg={{ size: 4, offset: 4 }}
                        xl={{ size: 4, offset: 4 }}

                    >
                        <h1 className="landing-title">Welcome to Finance Control</h1>
                    </Col>
                    <Col
                        xs={{ size: 8, offset: 2 }}
                        sm={{ size: 6, offset: 3 }}
                        md={{ size: 6, offset: 3 }}
                        lg={{ size: 4, offset: 4 }}
                        xl={{ size: 8, offset: 2 }}

                    >
                        <h4 className="landing-text">
                            This application will help you to manage your investment. Here you can be absolutely sure,
                            that you personal information will be protected. It is not necessary for you to use your real
                            personal information for registration. Click Sign Up button to start usage of the application
                        </h4>
                    </Col>
                </Row>
                  
            </div>
        );
    }
};

export default withRouter(Landing);
