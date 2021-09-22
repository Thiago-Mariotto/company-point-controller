/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, _next) => {
  // console.error(err.stack);

  console.log(err.message);
  return res.status(500).send('Something broke!');
};

module.exports = {
  errorHandler,
};
