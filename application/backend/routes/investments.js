const Router = require('koa-router');
const controller = require('../controllers/investments');

const router = new Router()

router.get('/', controller.getInvestments);
router.post('/', controller.createInvestment);
router.post('/:id', controller.updateInvestment);
router.delete('/:id', controller.deleteInvestment);

module.exports = router.routes();