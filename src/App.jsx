import React, { Component } from 'react';
import './App.css';
// import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />

        </div>
      </Router>
    );
  }
}

export default App;
