const loginService = require('../../services/login');

const makeLogin = async (req, res, _next) => {
  const { email, password } = req.body;
  
  const token = await loginService.validateUser(email, password);

  return res.status(200).json({ token });
};

module.exports = {
  makeLogin,
};
