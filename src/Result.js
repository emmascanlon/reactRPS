import React, { Component } from 'react';
import { Button, Container, Segment, Header, Table} from "semantic-ui-react";

class Result extends Component {
  state = {
    Wins: 0, 
    Losses: 0, 
    Ties: 0,
    winner: undefined,
   }
  

  setWinner = () => {
    const {Player1, Player2} = this.props
    const {Wins, Losses, Ties, Winner } = this.state
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

  render() {
    const {Wins, Losses, Ties, winner } = this.state
    return (
      <Container>
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
  
       <h1>
         {winner}
       </h1>
     
     <Button onClick={this.setWinner} color="violet">Shoot!</Button>
     </Container>

    );
  }
}

export default Result;