const Router = require('koa-router');
const controller = require('../controllers/account');

const router = new Router()

router.post('/signin', controller.signin);
router.post('/signup', controller.signup);

module.exports = router.routes();