/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, _next) => 

  res.status(500).send('Something broke!');

module.exports = errorHandler;
