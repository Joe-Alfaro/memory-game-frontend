import React from 'react';
import styled from 'styled-components';

import pokemon from '../data/pokemon';
import Card from './Card';


const StyledGameboard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1000px;
  height: 500px;
  margin: 0 auto;
`;

class Gameboard extends React.Component {
  state = {
    pokemon: []
  }
  clickHandler = event => {
      event.preventDefault();
      console.log("card clicked");
  }
  
  componentDidMount(){
    const builtDeck = this.props.doubleCards(pokemon);
    const shuffledDeck = this.props.shuffleCards(builtDeck);
    this.setState({pokemon: shuffledDeck})
  }

  render(){
    return(
      <StyledGameboard>
        {this.state.pokemon.map((pokemon, index) => (
          <Card
            key={index}
            pokedexId={pokemon.pokedex_id}
            name={this.props.capitalize(pokemon.name)}
            image={pokemon.imageURL}
            flipped={false}
            clickHandler={this.clickHandler}
          />
        ))}
      </StyledGameboard>
    )
  }
};

export default Gameboard;
