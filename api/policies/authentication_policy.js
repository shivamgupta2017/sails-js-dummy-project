const jwtServices = require('../services/jwtSign');
module.exports = (req, res, next) => {
  console.log('*************************')
  console.log('requested token ', req.headers.authorization);
  console.log('*************************')

  const header = req.headers['authorization'];
  if (!header) {
    return res.status(401).json({ success: false, msg: 'unauthorised user', data: {} });
  }

  const jwtData = jwtServices.verifyToken(header);
  if (jwtData.status) {
    // console.log('j<<<<<<<<<<<<<<', jwtData.data.data.id);
    req.me = jwtData.data.data.id;
    // console.log('jwt>>', jwtData.data);
    return next();
  } else {
    return res.status(401).json({ success: false, msg: 'unauthorised user', data: {} });
  }


}