import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class AccountDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Account Details" />
                    <br />
                    <div className='form-container'>
                        <TextField
                            type="email"
                            floatingLabelText="Email"
                            onChange={handleChange('Email')}
                            defaultValue={values.Email}
                            className="input-fields" />
                        <br />
                        <TextField
                            type="number"
                            floatingLabelText="Phone No"
                            onChange={handleChange('Phone')}
                            defaultValue={values.Phone}
                            className="input-fields" />
                        <br />
                        <TextField
                            type="password"
                            floatingLabelText="Password"
                            onChange={handleChange('Password')}
                            defaultValue={values.Password}
                            className="input-fields" />
                        <br /><br />
                        <RaisedButton
                            label="continue"
                            primary={true}
                            onClick={this.continue} />
                        <RaisedButton
                            label="back"
                            primary={false}
                            onClick={this.back} />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default AccountDetails
