import React, {Component} from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  margin: 0 auto;
  padding: 5px 15px;
  border: 2px silver solid;
  border-radius: 50px;
  color: white;
  text-shadow: 0 0 5px black;
  background: 
    ${props => props.playerNumber === '1' 
      ? 'red'
      : 'blue'
    };
`;

const Score = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 3rem;
`;

class Player extends Component {
  state = {
    score: 0
  }

  render() {
    return(
      <div className='playerWrapper'>
        <Name 
          playerNumber={this.props.playerNumber}
        >
          Player {this.props.playerNumber}
        </Name>
        <Score>{this.state.score}</Score>
      </div>
    );
  };
};

export default Player;
