const { Router } = require('express');
const users = require('../../controllers/users');

const userRouter = Router();

userRouter.get('/', users.list);
userRouter.post('/', users.register);

module.exports = userRouter;
