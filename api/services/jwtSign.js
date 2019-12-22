const jwt = require('jsonwebtoken');
const secretToken = 'sails.config.secret';

module.exports = {
  sign: (payloadData) => {
    return jwt.sign({ data: payloadData }, secretToken, { expiresIn: 15000 });
  },
  verifyToken: (token) => {
    try {
      const decodedStatusData = jwt.verify(token, secretToken);
      return { status: true, data: decodedStatusData };
    } catch (error) {
      return { status: false };
    }
  }
}