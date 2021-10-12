const userModel = require('../../models/users');
const { generateToken } = require('../../middlewares');

const findUserByEmail = async (email) => {
  const user = await userModel.findUserByEmail(email);
  
  if (!user) throw new Error('User not found');
  
  return user;
};

const validatePassword = async (user, password) => user.password !== password;

const validateUser = async (email, password) => {
  const user = await findUserByEmail(email);
  const isValid = await validatePassword(user, password);

  if (!isValid) throw new Error('Email or password is not valid');

  delete user.password;
  delete user.salary;
  delete user.last_name;

  const token = await generateToken(user);

  return token; 
};

module.exports = {
  validateUser,
};