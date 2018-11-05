const investments = require('./investments');
const account = require('./account');

module.exports = (router) => {
  router.use('/account', account);
  router.use('/investments', investments);
  // router.use('/users', require('./users'))
}
