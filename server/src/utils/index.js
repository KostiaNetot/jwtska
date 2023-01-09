const jwt = require('jsonwebtoken');

const accessTokenAge = 20;
const refreshTokenAge = 60 * 60;

const verifyAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split('')
    : '';

  if (!token) {
    return res.sendStatus(401);
  }
  
  try {
    const decoded = jwt.verify(token, process.env.SIGNATURE_ACESS);
    req.user = decoded;
  } catch (err) {
    return res.sendStatus(401);
  }
};

const getTokens = (login) => ({
  accessToken: jwt.sign({ login }, process.env.SIGNATURE_ACESS, {
      expiresIn: `${accessTokenAge}s`,
  }),
  refreshToken: jwt.sign({ login }, process.env.SIGNATURE_REFRESH, {
      expiresIn: `${refreshTokenAge}s`,
  }),
});

module.exports = {
  getTokens,
  refreshTokenAge,
  verifyAuthMiddleware,
};
