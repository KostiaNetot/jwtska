const jwt = require('jsonwebtoken');

// put it into .env:
const signatureAccess = 'S0mE_$ic3t_st@44_access';
const signatureRefresh = 'S0mE_$ic3t_st@44_refresh';

const accessTokenAge = 20;
const refreshTokenAge = 60 * 60;

const getTokens = (login) => ({
    accessToken: jwt.sign({ login }, signatureAccess, {
        expiresIn: `${accessTokenAge}s`,
    }),
    refreshToken: jwt.sign({ login }, signatureRefresh, {
        expiresIn: `${refreshTokenAge}s`,
    }),
});

module.exports = {
    getTokens,
    refreshTokenAge,
};
