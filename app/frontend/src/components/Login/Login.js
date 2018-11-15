import React, { Component } from 'react';
import './Login.css';
import AuthService from '../AuthService';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    state = {
        username: '',
        password: ''
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/account');
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Sign In</h1>
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
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleFormSubmit(e){
        e.preventDefault();
        const { username, password } = this.state; 
        if (username && password) {
            this.Auth.login(username, password)
            .then(res =>{
               this.props.history.replace('/account');
            })
            .catch(err =>{
                alert(err);
            })
        } else {
            alert('Username and Password cannot be empty');
        }
        
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;