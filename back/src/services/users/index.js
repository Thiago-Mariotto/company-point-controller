const userModel = require('../../models/users');

const list = async () => {
  const users = await userModel.users();

  return users;
};

const find = async (id) => {
  const user = await userModel.find(id);

  return user;
};

const register = async (user) => {
  const { name, lastname, role, jobId, salary, email, password } = user;
  const createdId = await userModel.register(name, lastname, role, jobId, salary, email, password);
  
  const newUser = {
    id: createdId,
    name,
  };
  
  return newUser;
};

const update = async (user) => {
  const { name, lastname, role, jobId, salary, email } = user;

  const updatedUser = await userModel.update(name, lastname, email, role, jobId, salary);

  return updatedUser;
};

const remove = async (id) => {
  const removedUser = await userModel.remove(id);

  return removedUser;
};

module.exports = {
  list,
  find,
  register,
  update,
  remove,
};