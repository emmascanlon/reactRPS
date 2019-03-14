import React, { Component } from 'react';
import Result from './Result'
import './App.css';
import { Button, Container, Segment, Header, Icon} from "semantic-ui-react";
import { blue } from 'ansi-colors';


class Players extends Component {
  state = { player1: undefined, player2: undefined, choiceMade1: false, choiceMade2: false, }

  Rock1 = () => {
    this.setState( state => {
      return {player1: "rock"}});
      this.setState( state => {
        return {choiceMade1: true}})
    }
    

  Paper1 = () => {
    this.setState( state => {
      return {player1: "paper"}})
      this.setState( state => {
        return {choiceMade1: true}})
    }
  

  Scissors1 = () => {
    this.setState( state => {
      return {player1: "scissors"}})
      this.setState( state => {
        return {choiceMade1: true}})
    }
  

  Rock2 = () => {
    this.setState( state => {
      return {player2: "rock"}})
      this.setState( state => {
        return {choiceMade2: true}})
    }
    
  
  Paper2 = () => {
    this.setState( state => {
      return {player2: "paper"}})
      this.setState( state => {
        return {choiceMade2: true}})
    }
  

  Scissors2 = () => {
    this.setState( state => {
      return {player2: "scissors"}})
      this.setState( state => {
        return {choiceMade2: true}})
    }
  
    resetChoice1 = () => {
      this.setState( state => {
        return {choiceMade1: false}})
      }

    resetChoice2 = () => {
      this.setState( state => {
        return {choiceMade2: false}})
      }

  render() {
    return (
      <Container id="container" style={styles.container}>
        <div id="players">
        <div>
        <Segment id = "player1" style = {styles.segement}> 
          <Header style={styles.header}>Player 1</Header>
    <div> {this.state.choiceMade1 ? <Button onClick={this.resetChoice1}>Change your Choice</Button> :
          <div><Button color="red" onClick={this.Rock1}><a><Icon color="white" size="huge" name="hand rock outline inverted"/></a></Button>
          <Button color="red" onClick={this.Paper1}><a><Icon color="white"size="huge" name="hand paper outline inverted"/></a></Button>
          <Button color="red" onClick={this.Scissors1}><a><Icon color="white" size="huge" name="hand scissors outline inverted"/></a></Button></div> }
        </div>
        </Segment>
        </div>
        <div>
        <Segment id= "player2">
          <Header> Player 2</Header>
          <div> {this.state.choiceMade2 ? <Button onClick={this.resetChoice2}>Change your Choice</Button> :
          <div>
          <Button color="red" onClick={this.Rock2}><a><Icon color="white"size="huge" name="hand rock outline inverted"/></a></Button>
          <Button color="red" onClick={this.Paper2}><a><Icon color="white" size="huge" name="hand paper outline inverted"/></a></Button>
          <Button color="red" onClick={this.Scissors2}><a><Icon color="white" size="huge" name="hand scissors outline inverted"/></a></Button>
           </div>}
          </div>
        </Segment>
        </div>

        </div>

        <div>
        <Segment id = "result">
          <Result  Player1={this.state.player1} Player2={this.state.player2} resetChoice1={this.resetChoice1} resetChoice2={this.resetChoice2}/>
        </Segment>
        </div>
        
       

      </Container>
    );
  }
}

  const styles = {
    container: {backgroundColor: blue,},
    segment: {backgroundColor: blue,},
  }



export default Players;