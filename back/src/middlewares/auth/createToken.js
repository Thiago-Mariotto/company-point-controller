const jwt = require('jsonwebtoken');

const generateToken = async (user) => {
  try {
    const secret = process.env.JWT_SECRET || 'seusecretdetoken';

    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return token;
  } catch (err) {
    console.log(`Error in generateToken: ${err.message}`);
    return err;
  }
};

module.exports = generateToken;