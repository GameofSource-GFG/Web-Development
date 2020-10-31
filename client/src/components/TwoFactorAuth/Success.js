import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    state = {
        LoginEmail: '',
        LoginPassword: ''
    }

    gotoSignUp = (e) => {
        e.preventDefault();
        this.props.gotoSignUp();
    }

    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.LoginEmail, this.state.LoginPassword);
        this.setState({
            LoginEmail: '',
            LoginPassword: ''
        })
    }

    render() {

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Login" />
                    <br />
                    <h2>Registeration Completed</h2>
                    <h3>Login to Continue</h3><br />
                    <form autoComplete="off" onSubmit={this.handleLoginSubmit} className='form-group'>
                        <label htmlFor="email">Email</label><br />
                        <input name="LoginEmail" type="email" className='form-control input-fields'
                            onChange={this.handleLoginChange} value={this.state.LoginEmail}
                        /><br />
                        <label htmlFor="password">Password</label><br />
                        <input name="LoginPassword" type="Password"
                            className='form-control input-fields'
                            onChange={this.handleLoginChange} value={this.state.LoginPassword} /><br />
                        <button className="btn btn-success" type="submit">LOGIN</button>
                    </form><br />
                    <button className="btn btn-primary" onClick={this.gotoSignUp}>Don't have an account? SignUp here</button><br />
                    <div className='err-msg'>{this.props.values.LoginError}</div>
                </>

            </MuiThemeProvider>
        )
    }
}

export default Success
