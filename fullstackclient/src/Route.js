import React from 'react';
import Home from './home/Home';
import AuthForm from './auth/AuthForm';
import OrgAuthForm from './auth/OrgAuthForm';
import{
    Route,
    Switch
} from 'react-router-dom';

const RouteFile = () => (
    <div className="navbar-route">
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/authform"><AuthForm /></Route>
        <Route exact path="/orgauthform"><OrgAuthForm /></Route>
    </Switch>
    </div>
)

export default RouteFile;