const { Router } = require('express');
const login = require('../../controllers/login');

const loginRouter = Router();

loginRouter.post('/login', login.makeLogin);

module.exports = loginRouter;
