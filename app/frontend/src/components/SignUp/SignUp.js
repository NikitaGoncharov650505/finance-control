import React, { Component } from 'react';
import './SignUp.css';
import AuthService from '../AuthService';

class SignUp extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/account');
    }

    handleFormSubmit(e){
        e.preventDefault();
        if (this.state.passwordConfirmation === this.state.password) {
            this.Auth.signUp(this.state.username, this.state.password, this.state.passwordConfirmation)
            .then(res =>{
               this.props.history.replace('/login');
            })
            .catch(err =>{
                alert(err);
            })
        }
        
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            className="form-item"
                            placeholder="Username"
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password confirmation"
                            name="passwordConfirmation"
                            type="passwordConfirmation"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;