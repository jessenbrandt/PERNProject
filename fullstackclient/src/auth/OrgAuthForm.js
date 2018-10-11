import React, { Component } from 'react';
import OrgAuth from '../auth/OrgAuth';
// import {
//   BrowserRouter as Router,
//   // Route,
//   // Switch
// } from 'react-router-dom';

class OrgAuthForm extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token })
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  render() {
    return (
          <OrgAuth setToken={this.setSessionState}/>
    );
  }
}

export default OrgAuthForm;