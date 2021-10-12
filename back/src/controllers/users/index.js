const userService = require('../../services/users');

const list = async (req, res, next) => {
  try {
    const users = await userService.list();

    return res.status(200).json(users);
  } catch (err) {
    console.log(`List users error: ${err.message}`);
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.find(id);
    
    return res.status(200).json(user);
  } catch (err) {
    console.log(`Error in find user: ${err.message}`);
    next(err);
  }
};

const register = async (req, res, next) => {
  try { 
    const userData = req.body;
    // const { authorization } = req.headers;

    const registeredUser = await userService.register(userData);

    return res.status(200).json(registeredUser);
  } catch (err) {
    console.log(`Error in user register: \n${err.message}`);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    // const { authorization } = req.headers;
    const userData = req.body;

    const updatedUser = await userService.update(userData);

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(`Error in user update: ${err.message}`);
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.remove(id);

    return res.status(204).end();
  } catch (err) {
    console.log(`Error in remove user ${err.message}`);
    next(err);
  }
};

module.exports = {
  list,
  register,
  update,
  find,
  remove,
};