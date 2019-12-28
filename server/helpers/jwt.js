const jwt = require('jsonwebtoken');
const secretKey = 'inilhosecretnya' //process.env.SECRET_KEY;

function generateToken(data) {
  let token = jwt.sign(data, secretKey)
  return token
}

module.exports = generateToken