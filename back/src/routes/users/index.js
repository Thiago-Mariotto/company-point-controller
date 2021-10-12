const { Router } = require('express');
const users = require('../../controllers/users');
const {
  isAdmin,
  validateToken,
} = require('../../middlewares');

const userRouter = Router();

userRouter.get('/', validateToken, isAdmin, users.list);
userRouter.get('/:id', users.find);
userRouter.post('/', users.register);
userRouter.put('/', users.update);
userRouter.delete('/:id', users.remove);

module.exports = userRouter;
