const investments = require('./investments');

module.exports = (router) => {
  router.prefix('/v1')
  router.use('/investments', investments)
  // router.use('/users', require('./users'))
}
