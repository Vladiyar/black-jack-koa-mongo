const Deck = require("./Deck");
const Player = require("./Player");
// const {drawCard, addCard} = require("./index")

module.exports = class Game {
    gameSessionId;
    isGameStarted = false;
    gameTurn = 0;
    players = [];
    card;
    winner;

    constructor (playersArray, id) {
        this.gameSessionId = id;
        this.card = new Deck();
        for (const singlePlayer of playersArray) {
            this.players.push(new Player(singlePlayer))
        }
        // for (let i = 0; i < this.players.length; i++) {
        //     this.players[i].playerName += i;
        //     this.players[i].drawCard(this.card.addCard())
        //     this.players[i].drawCard(this.card.addCard())
        //
        // }

                // for (let i = 0; i < this.players.length; i++) {
        //     this.players[i].playerName += i;
        //     drawCard(this.players[i], addCard(this.card))
        //     drawCard(this.players[i], addCard(this.card))
        //
        // }

        this.isGameStarted = true;

    }

    // nextPlayer() {
    //     this.gameTurn !== this.players.length - 1 ? this.gameTurn++ : this.gameTurn = 0;
    //
    //
    //     if (this.isGameStarted && this.gameTurn === 0) {
    //
    //         const winner = {
    //             highestHand: 0,
    //             winnerName: '',
    //         }
    //         for (let i = 0; i < this.players.length; i++) {
    //             if (winner.highestHand < this.players[i].handValue && this.players[i].handValue <= 21) {
    //                 winner['highestHand'] = this.players[i].handValue;
    //                 winner['winnerName'] = this.players[i].playerRealName;
    //             }
    //         }
    //         this.winner = winner;
    //         return winner;
    //
    //     }
    // }
}
