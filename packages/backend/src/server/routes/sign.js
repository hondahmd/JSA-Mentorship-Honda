const Router = require('koa-router');

const controllers = require('controllers/sign');

const router = Router();

router.post('/', controllers.signUp);

module.exports = router;
