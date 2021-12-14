import { getRandomLocation, getRandomUser, getRandomName } from './api.js';
import { phonePattern } from './validations.js';
import { 
    buildCardElements,
    createAlphaButtons,
    createLocationButtons,
    createPile,
    placeCardsOnPile,
} from './dom-helpers.js';

import { createCardDeck, shuffleDeck } from './cards.js';

const deck = createCardDeck();
shuffleDeck(deck);
buildCardElements(deck);
const piles = [{
    pile: createPile(),
    deck: deck.slice(0, 26),
    top: '200px',
    name: 'Player 1'
}, {
    pile: createPile(),
    deck: deck.slice(26),
    top: '400px',
    name: 'Player 2'
}];



placeCardsOnPile(piles[0]);
placeCardsOnPile(piles[1]);



// getRandomName().then(name => {
//     console.log(name);
//     createLocationButtons(name);
// }) ;
// createAlphaButtons();

