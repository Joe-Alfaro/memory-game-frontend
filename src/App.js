import React from 'react';

import Gameboard from './components/Gameboard';
import Statsheet from './components/Statsheet';

const App = () => {
  
  const doubleCards = data => {
    return [...data, ...data] 
  }
  
  const shuffleCards = cards => {
    let topCard, randomIndex;

    for(let i = cards.length; i > 0; i--) {
      randomIndex = Math.floor(
        Math.random() * i 
      );
      topCard = cards.pop();
      cards.splice(randomIndex, 0, topCard);
    }
    return cards;
  }
  
  const capitalize = word => {
    const first_letter = word[0].toUpperCase();
    const rest_of_word = word.slice(1);
    return `${first_letter}${rest_of_word}`;
  }

  return (
    <div className="App">
      <Gameboard 
        doubleCards={doubleCards}
        shuffleCards={shuffleCards}
        capitalize={capitalize}
      />
      <Statsheet/>
    </div>
  );
}

export default App;
