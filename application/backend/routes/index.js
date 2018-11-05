const investments = require('./investments');
const account = require('./account');
const user = require('./user');

module.exports = (router) => {
  router.use('/account', account);
  //router.use('/investments', investments);
  router.use('/user', user);
  // router.use('/users', require('./users'))
}
