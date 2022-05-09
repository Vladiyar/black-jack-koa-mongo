const Game = require("./Game");
const Player = require("./Player");


const arrayCreator = exports.arrayCreator = (g, result) => {
    const responseArray = [{
            'players': [],
        },
        {
            'currentPlayer': g.gameTurn
        },
        {
            'result': result
        }]
    for (let i = 0; i < g.players.length; i++) {
        responseArray[0].players.push({
            'player': g.players[i].playerName,
            'playerName': g.players[i].playerRealName,
            'isCanDraw': g.players[i].isCanDraw,
            'cards': g.players[i].cardsArray,
            'handValue': g.players[i].handValue,
            'currentPlayer': g.gameTurn
        })
    }
    return responseArray;
}
const state = exports.state = (g) => {
    return arrayCreator(g);
}

// const addCard = exports.addCard = (g) => {
//     g.players[g.gameTurn].drawCard(g.card.addCard()) > 21 ? g.players[g.gameTurn].isCanDraw = false : null;
//
//     if (!g.players[g.gameTurn].isCanDraw) {
//         g.players[g.gameTurn].isPlayerDraw = false;
//         return nextPlayer(g);
//     }
//     return arrayCreator(g, g.winner);
// }


const startGame = exports.startGame = (g) => {
    for (let i = 0; i < g.players.length; i++) {
        g.players[i].playerName += i;
        drawCard(g.players[i], addCardInner(g))
        drawCard(g.players[i], addCardInner(g))

    }
}


const addCard = exports.addCard = (g) => {

    drawCard(g.players[g.gameTurn], addCardInner(g)) > 21 ? g.players[g.gameTurn].isCanDraw = false : null;

    if (!g.players[g.gameTurn].isCanDraw) {
        g.players[g.gameTurn].isPlayerDraw = false;
        return nextPlayer(g);
    }
    return arrayCreator(g, g.winner);
}

const nextPlayerInner = (g) => {
    g.gameTurn !== g.players.length - 1 ? g.gameTurn++ : g.gameTurn = 0;


    if (g.isGameStarted && g.gameTurn === 0) {

        const winner = {
            highestHand: 0,
            winnerName: '',
        }
        for (let i = 0; i < g.players.length; i++) {
            if (winner.highestHand < g.players[i].handValue && g.players[i].handValue <= 21) {
                winner['highestHand'] = g.players[i].handValue;
                winner['winnerName'] = g.players[i].playerRealName;
            }
        }
        g.winner = winner;
        return winner;

    }
}

const nextPlayer = exports.nextPlayer = (g) => {
    const winner = nextPlayerInner(g);

    if (winner && winner['highestHand'] === 0) {
        return arrayCreator(g, "It's a draw")
    }
    if (winner) {
        return arrayCreator(g, 'Won ' + winner['winnerName'] + ' with ' + winner['highestHand'])
    }
    return arrayCreator(g, g.winner);
}

const addCardInner = (g) => {
    if (g.card.length > 1) {
        return g.card.pop()
    }
    return g.card.cardDeck.pop()
}


const drawCard = exports.drawCard = (player, cardDescription) => {
    if (player.isCanDraw) {
        player.cardsArray.push(cardDescription);
        if (cardDescription[1] === 11) {
            if (player.handValue + 11 > 21) {
                player.handValue += 1;
                return;
            }
        }
        return player.handValue += cardDescription[1];
    }
}

const restart = exports.restart = (g) => {
    return arrayCreator(g, g.winner);
}

