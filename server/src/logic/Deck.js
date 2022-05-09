module.exports = class Deck {
    cardDeck = []

    createDeck() {
        const cardValues = {
            J: 10,
            Q: 10,
            K: 10,
            A: 11
        };
        const cardSuits = ['spaces', 'clubs', 'hearts', 'diamonds'];
        const arrayOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

        for (let i = 0; i < cardSuits.length; i++) {
            for(let j = 0; j < arrayOfCards.length; j++) {
                let card = [cardSuits[i], arrayOfCards[j]];
                typeof arrayOfCards[j] === 'string' ? card.splice(1, 0, cardValues[arrayOfCards[j]] ) : null;
                this.cardDeck.push(card)
            }
        }

        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        shuffleArray(this.cardDeck)

    }
    constructor() {
        this.createDeck()
    }




    // addCard() {
    //     return this.cardDeck.pop();
    // }

}

