import React, { Component } from 'react';
import Result from './Result'
import { Button, Container, Segment, Header} from "semantic-ui-react";
import { blue } from 'ansi-colors';


class Players extends Component {
  state = { player1: undefined, player2: undefined }

  Rock1 = () => {
    this.setState( state => {
      return {player1: "rock"}
    }
    )}

  Paper1 = () => {
    this.setState( state => {
      return {player1: "paper"}
    }
    )}

  Scissors1 = () => {
    this.setState( state => {
      return {player1: "scissors"}
    }
    )}

  Rock2 = () => {
    this.setState( state => {
      return {player2: "rock"}
    }
    )}
  
  Paper2 = () => {
    this.setState( state => {
      return {player2: "paper"}
    }
    )}

  Scissors2 = () => {
    this.setState( state => {
      return {player2: "scissors"}
    }
    )}

  render() {
    return (
      <Container style={styles.container}>
        <Segment style = {styles.segement}> 
          <Header style={styles.header}>Player 1</Header>
          <Button onClick={this.Rock1}>Rock</Button>
          <Button onClick={this.Paper1}>Paper</Button>
          <Button onClick={this.Scissors1}>Scissors</Button>
          </Segment>
    <Result Player1={this.state.player1} Player2={this.state.player2}/>
       <Segment>
         <Header> Player 2</Header>
       <Button onClick={this.Rock2}>Rock</Button>
        <Button onClick={this.Paper2}>Paper</Button>
        <Button onClick={this.Scissors2}>Scissors</Button>
        </Segment>

      </Container>
    );
  }
}

  const styles = {
    container: {backgroundColor: blue,},
    segment: {backgroundColor: blue,},
  }



export default Players;