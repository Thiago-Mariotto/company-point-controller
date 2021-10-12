const userModel = require('../../models/users');

const list = async () => {
  const users = await userModel.users();

  return users;
};

const register = async (user) => {
  const { name, lastname, role, jobId, salary } = user;
  const createdId = await userModel.register(name, lastname, role, jobId, salary);
  
  const newUser = {
    id: createdId,
    name,
  };
  
  return newUser;
};

const update = async (user) => {
  const { name, email, password, role } = user;

  const updatedUser = await userModel.update(name, email, password, role);

  return updatedUser;
};

module.exports = {
  list,
  register,
  update,
};