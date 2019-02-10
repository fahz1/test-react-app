import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return(
      <Container>
        <Jumbotron>
          <h2>Welcome to React/Bootstrap</h2>
          <p>Fancy website with bootstrap and react.</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </Container>
    )
  }
}
