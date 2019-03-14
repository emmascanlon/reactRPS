import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, } from "semantic-ui-react";
import Players from './Players'




class App extends Component {
  render() {
    return (
      <Container>
       <Players />
      </Container>
    );
  }
}

export default App;
