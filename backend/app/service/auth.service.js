const  jwt  = require( "jsonwebtoken");
const bcrypt =require( 'bcrypt')
var createError = require('http-errors')
const User = require("../models/User")

class AuthService{

    async serviceRegister(registerData){
       
        registerData.password = await bcrypt.hash(registerData.password, 12)


        let userFound = await User.findOne({
         
            email: registerData.email,
     
        })
    
        if (userFound) {
            
          throw  createError(401, "Email already exits please try another one.");
        }
        let data = await User.create(registerData)
    
        if (data) {
          var token = jwt.sign(
            {
              id: data.id,
            },
            String(process.env.JWT_KEY),
            {
              expiresIn: "12000h",
            }
          );
    
          return token
        }
    }
    async authLogin(email, password) {
        console.log(email,"asd");
    
        const loginData =   await User.findOne({
         
            email:   email ,
            isActive: true,
          
        });
    
        if (!loginData) {
          throw createError.NotFound("Sorry, this email is not registered with us.")
        }
        var passwordIsValid = bcrypt.compareSync(password, loginData.password);
    
        if (!passwordIsValid) {
          throw createError.NotFound( "Invalid password please try again.")
    
        }
    
        var token = jwt.sign(
          {
            id: loginData.id,
          },
          String(process.env.JWT_KEY),
          {
            expiresIn: "12000h",
          }
        );
       
        return token
      }
}

module.exports =  new AuthService()