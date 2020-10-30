import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    gotologin = (e) => {
        e.preventDefault();
        this.props.gotologin();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Details" />
                    <br />
                    <div className='form-container'>
                        <TextField
                            floatingLabelText="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            className="input-fields" />
                        <br />
                        <TextField
                            floatingLabelText="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            className="input-fields" />
                        <br />
                        <TextField
                            floatingLabelText="One line bio here"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            className="input-fields" />
                        <br /><br />
                        <RaisedButton
                            label="continue"
                            primary={true}
                            onClick={this.continue}
                            className="input-fields" />
                        <br />
                        <RaisedButton
                            label="Already have an account? login here"
                            primary={false}
                            onClick={this.gotologin}
                            className="input-fields" />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default PersonalDetails
