import {data} from '../data/pokemon.js';

const deckBuilder = () => {
  const doubleDeck = deck => (
    [...deck, ...deck]
  );

  const shuffle = cards => {
    let topCard, randomIndex;

    for(let i = cards.length; i > 0; i--) {
      randomIndex = Math.floor(
        Math.random() * i 
      );
      topCard = cards.pop();
      cards.splice(randomIndex, 0, topCard);
    }
    return cards.map((card, index) => {
      return {
        ...card,
        id: index
      }
    }) 
  };

  return shuffle(doubleDeck(data));
}

export default deckBuilder;
