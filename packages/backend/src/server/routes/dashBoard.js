const Router = require('koa-router');

const router = Router();

router.get('/', ctx => {
  ctx.response.body = {
    message: 'Verified!'
  };
});

module.exports = router;
