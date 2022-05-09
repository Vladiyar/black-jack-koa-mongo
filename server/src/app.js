const Koa = require('koa');
const router = require('./router');
const koaBody = require('koa-body');
const serve = require('koa-static');
require("dotenv").config();
const path = require('path');
const cors  = require('@koa/cors');
const niv = require('node-input-validator');
const mongoose = require("mongoose");

const app = new Koa();
const MONGO_LOGIN = process.env.MONGO_LOGIN;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

app.use(cors())
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(niv.koa());

app.use(serve(path.join(__dirname + '/static')));

async function start() {
    try {
        await mongoose.connect('mongodb+srv://' + MONGO_LOGIN + ':' + MONGO_PASSWORD + '@cluster0.6n1wt.mongodb.net/blackJack?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            // useFindAndModify: false
        })
        app.listen(3000, () => {
            console.log('listening on port 3000..')
        });
    } catch (e) {
        console.log(e)
    }
}
start()


