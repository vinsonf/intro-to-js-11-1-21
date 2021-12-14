export function createCardDeck() {
    const suits = ['hearts', 'diams', 'spades', 'clubs'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];
    suits.forEach((suit) => {
        values.forEach(value => {
            deck.push({
                suit,
                value
            });
        })
    });
    return deck;
}

export function shuffleDeck(deck) {
    deck.sort(() => {
        return 0.5 - Math.random();
    })
}