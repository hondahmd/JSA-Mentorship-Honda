const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const koaJwt = require('koa-jwt');

const { publicKey } = require('keys/keys');
const signRouter = require('./routes/sign');
const dashBoardRouter = require('./routes/dashBoard');
const middlewares = require('./middlewares/jwt');

const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);
app.use(bodyParser());

app.use(middlewares.jwtError);
app.use(
  koaJwt({ secret: publicKey, algorithms: ['RS256'] }).unless({
    path: [/^\/sign/]
  })
);

// routes
router.use('/sign', signRouter.routes());
router.use('/dashboard', dashBoardRouter.routes());

// use router
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
