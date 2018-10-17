import React, { Component } from 'react';
import Auth from '../auth/Auth';
// import {
//   BrowserRouter as Router,
//   // Route,
//   // Switch
// } from 'react-router-dom';

class AuthForm extends Component {

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

  setSessionState = (token, type) => {
    localStorage.setItem('token', token);
    localStorage.setItem('type', type)
    this.setState({ sessionToken: token });
  }

  render() {
    return (
          <Auth setToken={this.setSessionState}/>
    );
  }
}

export default AuthForm;