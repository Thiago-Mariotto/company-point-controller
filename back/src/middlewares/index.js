const isAdmin = require('./validateAdmin');
const errorHandler = require('./errorMiddleware');
const validateToken = require('./auth/validateToken');
const generateToken = require('./auth/createToken');

module.exports = {
  errorHandler,
  isAdmin,
  validateToken,
  generateToken,
};