const { JsonWebTokenError } = require( "jsonwebtoken");


module.exports =  (err, req, res, next)=> {
  let { status, message } = err;
  console.log(err,"err in middleware")
  if (err instanceof JsonWebTokenError) {
    status = 401;
    console.log("sdfsadfasdfsad");
    
  }
  
  if (!status) {
    status = 500;
    message = "Internal Server err"
  }
  console.log(message,"message");
  
  return res.status(status).send({ status, message });
//   next(err);
} 