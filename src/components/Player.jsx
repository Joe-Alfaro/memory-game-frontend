import React from 'react';
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

const Player = ({playerOnePoints, playerNumber}) =>  {
    return(
      <div className='playerWrapper'>
        <Name 
          playerNumber={playerNumber}
        >
          Player {playerNumber}
        </Name>
        <Score>{playerOnePoints}</Score>
      </div>
    );
  };

export default Player;
