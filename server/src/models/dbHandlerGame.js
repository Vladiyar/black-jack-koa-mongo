const {Schema, model} = require('mongoose')


// const schemaCards = new Schema({
//     cards: {
//         type: Array
//     }
// })

const schemaGame = new Schema({
    gameSession: {
        type: String,
        required: true
    },
    isGameStarted: {
        type: Boolean,
        default: false
    },
    gameTurn: {
        type: Number,
        default: 0,
    },
    players: {
        type: Array,
        required: true
    },
    card: {
        type: Array
    },
    // card: [schemaCards],
    winner: {
        type: String,
        default: null
    },

})


module.exports = model('dbHandlerGame', schemaGame)