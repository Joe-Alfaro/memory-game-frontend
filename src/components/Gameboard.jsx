import React from 'react';
import styled from 'styled-components';

import Card from './Card';


const StyledGameboard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

const Gameboard = ({
  cards, 
  checkForMatch,
  flipped,
  found,
  clickHandler
}) => {
  const capitalize = word => (
    `${word[0].toUpperCase()}${word.slice(1)}`
  );

  return(
    <StyledGameboard>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          pokedexId={card.pokedex_id}
          name={capitalize(card.name)}
          image={card.imageURL}
          clickHandler={clickHandler}
          faceUp={flipped.includes(card.id)}
          found={found.includes(card.id)}
        />
      ))}
    </StyledGameboard>
  )
};

export default Gameboard;
