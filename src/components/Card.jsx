import React from 'react';
import styled from 'styled-components';

const PokemonCard = styled.div`
  background-image: linear-gradient(to bottom right, silver, gray);
  border-radius: 15px;
  padding: 5px;
  height: 105px;
  width: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px grey;
  ${props => !props.faceUp && '.content{display: none};'}
  ${props => props.found && 'visibility: hidden;'}
  &:hover{
    cursor: pointer;
  }
`;

const PokedexId = styled.h2`
  font-size: 0.75rem;
  color: white;
  text-shadow: 0 0 6px black;
  padding: 0;
  margin: 0;
  text-align: right;
`;

const PokemonName = styled.h1`
  font-size: 1.25rem;
  color: white;
  text-shadow: 0 0 6px black;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const PokemonImg = styled.img`
  margin: 0 auto;
  display: flex;
  height: 50%;
  width: auto;
`;

const Card = ({
  id, 
  name, 
  image, 
  pokedexId, 
  faceUp,
  clickHandler,
  found
}) => {
  return (
    <PokemonCard 
      onClick={() => clickHandler(id)} 
      faceUp={faceUp}
      found={found}
    >
      <PokemonName 
        className='content'
      >
        {name}
      </PokemonName>
      <PokemonImg 
        className='content' 
        src={image} 
      />
      <PokedexId 
        className='content'
      >
        {pokedexId.toString().padStart(3, '0')}
      </PokedexId>
    </PokemonCard>
  );
};

export default Card;
