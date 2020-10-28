import React from 'react';
import { Home } from './Homepage/Homepage';
import { AboutUs } from './AboutUs/AboutUs';
import { Events } from '';
import { ContactUs } from './Contact-Us/ContactUs';
import { MemberBlock } from './CommitteeMembers/MemberBlock';
import { NavBar } from './Navbar/RightNav';
import { Route, Switch, Redirect } from 'react-router-dom';
export function Routes() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Homepage" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/Events" component={Events} /> 
                <Route exact path="/ContactUs" component={ContactUs} /> 
                <Route exact path="/MemberBlock" component={MemberBlock} /> 
            </Switch>
        </div>
    );
}