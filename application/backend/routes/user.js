const Router = require('koa-router');
const controller = require('../controllers/user');
const router = new Router();

router.post('/get-investments', controller.getInvestments);
router.post('/add-investment', controller.addInvestment);
router.post('/update-investment', controller.updateInvestment);
router.delete('/delete-investment', controller.deleteInvestment);

module.exports = router.routes()
