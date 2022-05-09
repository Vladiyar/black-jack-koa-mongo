const Router = require('koa-router');
const router = new Router();
const login = require('../api/login')
const {restart, addCard, nextPlayer, state, startGame} = require('../logic');
const Game = require("../logic/Game");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const {Validator} = require("node-input-validator");
const {createReadStream} = require('fs')
const dbHandlerGame = require('../models/dbHandlerGame')


const jwtKey = 'potato';

const authMiddleware = async (ctx, next) => {
    const token = ctx.header['authorization'];
    const session = jwt.verify(token, jwtKey);
    const gettingGameOnDB = dbHandlerGame.findOne({
        gameSession: session
    })
    try {
        if (!gettingGameOnDB) {
            ctx.status = 501;
            return;
        }
        ctx.state.session = session;
        return next();
    }
    catch (e) {
        ctx.status = 501;
    }
}

router.post('/api/game', authMiddleware, async (ctx) => {
    const session = ctx.state.session.sessionId;
    const gettingGameOnDB = await dbHandlerGame.findOne({
        gameSession: session
    })
    ctx.body = state(gettingGameOnDB);
})

router.post('/api/hit', authMiddleware, async (ctx) => {
    const session = ctx.state.session.sessionId;
    const gettingGameOnDB = await dbHandlerGame.findOne({
        gameSession: session
    })

    ctx.body = addCard(gettingGameOnDB);
    await dbHandlerGame.findOneAndUpdate({gameSession: session}, {
        card: gettingGameOnDB.card,
        players: gettingGameOnDB.players,
        gameTurn: gettingGameOnDB.gameTurn
    })
})

router.post('/api/stand', authMiddleware, async (ctx) => {
    const session = ctx.state.session.sessionId;
    const gettingGameOnDB = await dbHandlerGame.findOne({
        gameSession: session
    })
    ctx.body = nextPlayer(gettingGameOnDB);
    await dbHandlerGame.findOneAndUpdate({gameSession: session}, {gameTurn: gettingGameOnDB.gameTurn})
})

router.post('/api/restart', authMiddleware, async (ctx) => {
    const session = ctx.state.session.sessionId;
    const gettingGameOnDB = await dbHandlerGame.findOne({
        gameSession: session
    })
    const players = gettingGameOnDB.players.map((player) => player.playerRealName);
    await dbHandlerGame.deleteOne({
        gameSession: session
    })
    const game = new Game(players, session);
    startGame(game)
    const createdGame = new dbHandlerGame({
        gameSession: game.gameSessionId,
        isGameStarted: game.isGameStarted,
        gameTurn: game.gameTurn,
        players: game.players,
        card: game.card.cardDeck,
        winner: game.winner
    })

    createdGame.save()

    ctx.body = restart(game, players);
})

router.post('/api/login', async (ctx) => {
    const data = ctx.request.body;
    let v = new Validator(
        data,
        {
            'players': 'required|array',
            'players.*': 'required|string'
        },
    );

    let matched = await v.check();

    if (matched) {
        const sessionId = uuidv4();
        const token = jwt.sign({ sessionId }, jwtKey);

        try {
            ctx.body = await login.loginApi(token);
        } catch(err) {
            ctx.status = 501;
            ctx.body = 'Internal error';
        }

        const game = new Game(data.players, sessionId)
        startGame(game);

        const createdGame = new dbHandlerGame({
            gameSession: game.gameSessionId,
            isGameStarted: game.isGameStarted,
            gameTurn: game.gameTurn,
            players: game.players,
            card: game.card.cardDeck,
            winner: game.winner
        })

        createdGame.save()
    }
})

router.get('/(.*)', async (ctx) => {
    ctx.type = 'html';
    ctx.body = createReadStream(__dirname + '/../static/index.html');
})



module.exports = router;
