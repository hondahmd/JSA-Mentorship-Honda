const Router = require('koa-router');

const controllers = require('controllers/sign/sign');

const router = Router();

router.post('/', controllers.signUp);
router.get('/', controllers.signIn);

module.exports = router;
