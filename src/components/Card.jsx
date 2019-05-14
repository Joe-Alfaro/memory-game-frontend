import React from 'react';
import styled from 'styled-components';

const PokemonCard = styled.div`
  background-image: linear-gradient(to bottom right, #86BFBB, #4EB9EA);
  border-radius: 15px;
  padding: 5px;
  height: 105px;
  width: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px grey;
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

const Card = props => {
  return (
        <PokemonCard onClick={props.clickHandler}>
          <PokemonName>{props.name}</PokemonName>
          <PokemonImg src={props.image} />
          <PokedexId>{props.pokedexId.toString().padStart(3, '0')}</PokedexId>
        </PokemonCard>
  );
};

export default Card;
