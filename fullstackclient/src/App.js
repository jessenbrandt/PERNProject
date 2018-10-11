import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './home/Footer'
import Navbar from './home/Navbar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
