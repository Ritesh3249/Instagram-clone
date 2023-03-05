const jwt = require("jsonwebtoken")
var createError = require('http-errors')


module.exports = function isAuth (req, res, next) {
  let token = req.headers.authorization;
  if (!token) throw new createError(401,"Authorization token is required");

  token = token.split(" ")[1];
  if (!token) throw new createError(401,"Authorization token is required");
 
  req.user =  jwt.verify(token, String(process.env.JWT_KEY));
  next();
  
}