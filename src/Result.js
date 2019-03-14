import React, { Component } from 'react';
import { Button, Container, Segment, Table} from "semantic-ui-react";
import './App.css';

class Result extends Component {
  state = {
    Wins: 0, 
    Losses: 0, 
    Ties: 0,
    winner: undefined,
    winnerDeclared: false
   }
  

  setWinner = () => {
    const {Player1, Player2,} = this.props;
    const {Wins, Losses, Ties,} = this.state;
    this.setState({winnerDeclared: true})
   
  if (Player1 === Player2) {
    this.setState({Winner: "It's a Tie!"}) 
    this.setState({Ties: Ties +1})

  }

    else if (Player1 === 'rock' && Player2 === 'scissors')
    {this.setState({winner: 'Player1 Wins!'})
      this.setState({Wins: Wins+1 }) 
    }

    else if (Player1 === 'rock' && Player2 === 'paper')
    {this.setState({winner: 'Player2 Wins!' }) 
    this.setState({Losses: Losses+1 }) 
  }

    else if (Player1 === "paper" && Player2 === "scissors")
    {this.setState({winner: 'Player2 Wins!'}) 
    this.setState({Losses: Losses+1 }) 
  }

    else if (Player1 === "paper" && Player2 === "rock")
    {this.setState({winner: 'Player1 Wins!'}) 
    this.setState({Wins: Wins+1 }) 
  }

    else if (Player1 === "scissors" && Player2 === "rock")
    {this.setState({winner: 'Player2 Wins!'}) 
    this.setState({Losses: Losses+1})
  }

    else if (Player1 === "scissors" && Player2 === "paper")
    {this.setState({winner: 'Player1 Wins!'}) 
    this.setState({Wins: Wins+1 }) 
  }
}

  resetScoreBoard = () => {
    this.setState({Wins: 0, Ties: 0, Losses: 0})
  }

  newRound = () => {
    const {resetChoice1, resetChoice2} =this.props
    this.setState({winnerDeclared: false})
    resetChoice1()
    resetChoice2()
  }


  

  render() {
    const {Wins, Losses, Ties, winner, winnerDeclared } = this.state
    const {Player1, Player2,} = this.props
    return (
      <Container>
<div> 
{ winnerDeclared ?  <div>
        <h5> Player1 chose {Player1} </h5>
        <h5> Player2 chose {Player2} </h5>
  
       <h1>
         {winner}
       </h1>
       </div> : null }

       </div>
     
     <Button onClick={this.setWinner} color="violet">Shoot!</Button>
     <Button onClick={this.newRound} color="olive">New Round</Button>
     <Button onClick={this.resetScoreBoard} color="yellow">Reset Scores</Button>
    
     
     

<Segment>
<h4>Player 1</h4>
<Table>
  <tr>
    <td>Wins</td>
    <td>Losses</td>
    <td>Ties</td>
  </tr>
  <tr>
    <td>{Wins}</td>
    <td>{Losses}</td>
    <td>{Ties}</td>
  </tr>
</Table>
</Segment>

<Segment>
<h4>Player 2</h4>
<Table>
  <tr>
    <td>Wins</td>
    <td>Losses</td>
    <td>Ties</td>
  </tr>
  <tr>
    <td>{Losses}</td>
    <td>{Wins}</td>
    <td>{Ties}</td>
  </tr>
</Table>
</Segment>
     
</Container>
    );
  }
}

export default Result;