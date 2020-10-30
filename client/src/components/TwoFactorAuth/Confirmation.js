import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class AccountDetails extends Component {
    continue = (e) => {
        const { firstName, lastName, bio, Email, Phone, Password } = this.props.values;
        e.preventDefault();
        this.props.submit(firstName, lastName, bio, Email, Phone, Password);
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, bio, Email, Phone, Password, Error } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details" />
                    <br />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName} />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName} />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio} />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Email"
                            secondaryText={Email} />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Phone"
                            secondaryText={Phone} />
                    </List>
                    <RaisedButton
                        label="confirm and submit"
                        primary={true}
                        onClick={this.continue} />
                    <RaisedButton
                        label="back"
                        primary={false}
                        onClick={this.back} />
                    <br />
                    <div className='err-msg'>{Error}</div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default AccountDetails
