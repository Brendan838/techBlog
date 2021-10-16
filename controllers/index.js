const router = require('express').Router();
const home = require('./home');
const dashboard =require('./dashboard')
const user = require('./user')

router.use('/', home);
router.use('/dashboard', dashboard);
router.use('/user', user);

module.exports = router;


