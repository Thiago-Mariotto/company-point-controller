const jwt = require('jsonwebtoken');
const userService = require('../../services/users');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(authorization, secret);
    const [user] = await userService.find(decoded.data[0].id);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = validateToken;