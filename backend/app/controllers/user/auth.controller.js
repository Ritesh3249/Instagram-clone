const AuthValidation = require("../../validator/auth.validator")
const AuthService = require("../../service/auth.service")

class UserAuthController{
    async register(req,res){

       const bodyData = await AuthValidation.validateUserRegister(req.body)

       const token = await AuthService.serviceRegister(bodyData)
       res.status(200).json({ message: "User register Successfully.", accessToken: token });

    }
    async login(req, res) {
    
        const loginData = await AuthValidation.validateLogin(req.body)
    
        const { email, password } = loginData
    
    
        let token = await AuthService.authLogin( email, password)
        res.status(200).json({ message: "login successfully", accessToken: token });
    
    
    
    
      }
    
}

module.exports = new UserAuthController()