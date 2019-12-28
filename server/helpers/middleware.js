const jwt = require("jsonwebtoken");
const secretKey = 'inilhosecretnya' //process.env.SECRET_KEY;


exports.auth = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          msg: "Token is not valid",
          Error: err
        });
      }

      req.currentUser = decoded
      next();
    });
  } else {
    return res.status(403).json({
      msg: "You are not logged in, please Login and try again"
    });
  }

};
