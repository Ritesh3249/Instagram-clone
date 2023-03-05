const Joi = require("joi")
const {joiPasswordExtendCore} = require("joi-password")
const JoiPassword = Joi.extend(joiPasswordExtendCore)
const JoiValidator = require("./joiValidator")


class AuthValidator extends JoiValidator{
    validateUserRegister(obj) {
        return this.validate(
          {
            
            name: Joi.string().required(),
            phone: Joi.string().required(),
            email: Joi.string().email().required(),
            password: JoiPassword.string().min(8).minOfSpecialCharacters(1).minOfUppercase(1).minOfNumeric(1).required(),

          },
          obj
        );
      }
      validateLogin(obj){
        return this.validate(
          {
            email: Joi.string().email().required(),
            password: JoiPassword.string().min(8).minOfSpecialCharacters(1).minOfUppercase(1).minOfNumeric(1).required(),

          },
          obj
        );
      }
    
}


module.exports = new AuthValidator();
