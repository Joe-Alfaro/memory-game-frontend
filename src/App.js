import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import deckBuilder from './helperFunctions/deckBuilder';
import Gameboard from './components/Gameboard';
import Statsheet from './components/Statsheet';

const StyledApp = styled.div``;
//const Button = styled.div`
//  color: white;
//  font-size: 4rem;
//  font-weight: bold;
//  background-color: lightgreen;
//  padding: 5px 15px;
//  border: 2px lightgreen solid;
//  border-radius: 15px;
//  &:hover{
//    cursor: pointer;
//    color: lightgreen;
//    background-color: white;
//  }
//`;

const App = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(deckBuilder());
  }, []);

  const [found, setFound] = useState([]);
  const [flipped, setFlipped] = useState([]);
  
  const checkPair = id => {
    const firstCard = cards.find(card => (
      card.id === flipped[0]
    ))
    const secondCard = cards.find(card => (
      card.id === flipped[1]
    ))
    
    firstCard.pokedex_id === secondCard.pokedex_id
      && setFound([
        ...found, 
        flipped[0],
        flipped[1]
      ])
    setFlipped([id]);
  };
  
  const clickHandler = id => {
    if(flipped[0] !== id){
      if(flipped.length < 2){
        setFlipped([...flipped, id]);
      }
      else if(flipped.length === 2){
        checkPair(id);
      }
    }
    else{
      alert('Oops, clicked the same card');
    };
  };

  const [playerOnePoints, setPlayerOnePoints] = useState(0);
  
  useEffect(() => {
    setPlayerOnePoints(found.length/2)
  }, [found])

  return (
    <StyledApp>
        <Gameboard 
          cards={cards}
          clickHandler={clickHandler}
          flipped={flipped}
          setFlipped={setFlipped}
          found={found}
        />
        {//cards.length > 1 ? 
          //        : <div style={{width: '1000px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}> 
          //            <Button onClick={() => setCards(createDeck(32))}>Start</Button>
          //          </div>
          }
        <Statsheet
          playerOnePoints={playerOnePoints}
        />
    </StyledApp>
  );
}

export default App;
