const { Router } = require('express');
const login = require('./login');
const users = require('./users');
const jobs = require('./jobs');

const router = Router();

router.use('/login', login);
router.use('/users', users);
router.use('/jobs', jobs);

module.exports = router;
