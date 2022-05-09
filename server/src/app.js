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
const LOGIN = process.env.MONGO_LOGIN;
const PASSWORD = process.env.MONGO_PASSWORD;
const HOST = process.env.MONGO_HOST;
const ROUTE = process.env.MONGO_ROUTE;

app.use(cors())
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(niv.koa());

app.use(serve(path.join(__dirname + '/static')));

async function start() {
    try {
        await mongoose.connect(HOST + LOGIN + ':' + PASSWORD + ROUTE, {
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


