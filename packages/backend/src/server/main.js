const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const signRouter = require('./routes/sign');

const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);
app.use(bodyParser());

// routes
router.use('/sign', signRouter.routes());

// use router
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
