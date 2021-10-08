const makeLogin = async (req, res, _next) => {
  const { email, password } = req.body;

  console.log(email, password);

  return res.status(200).send('ok');
};

module.exports = {
  makeLogin,
};
