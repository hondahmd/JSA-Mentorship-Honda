const Router = require('koa-router');

const router = Router();

router.get('/', ctx => {
  // console.log(ctx.request.headers.authorization);
  ctx.response.body = {
    message: 'Verified!'
  };
});

module.exports = router;
