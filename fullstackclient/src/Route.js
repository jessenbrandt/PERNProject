import React from 'react';
import Home from './home/Home';
import AuthForm from './auth/AuthForm';
import OrgData from './oganizationStuff/OrgData';
import About from './home/About';
import Profile from './profile/Profile';
import MainProfile from './profile/MainProfile';
import Events from './volunteer/Events';
import EventTable from './volunteer/EventTable';
import{
    Route,
    Switch
} from 'react-router-dom';

const RouteFile = () => (
    <div className="navbar-route">
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/authform"><AuthForm /></Route>
        <Route exact path="/orgdata"><OrgData /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/mainprofile"><MainProfile /></Route>
        <Route exact path="/events"><Events /></Route>
        <Route exact path="/eventtable"><EventTable /></Route>
    </Switch>
    </div>
)

export default RouteFile;