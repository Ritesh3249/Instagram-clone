const Joi = require("joi")
const {joiPasswordExtendCore} = require("joi-password")
const JoiPassword = Joi.extend(joiPasswordExtendCore)
const JoiValidator = require("./joiValidator")


class AuthValidator extends JoiValidator{
    validateUserRegister(obj) {
        return this.validate(
          {
            salutation: Joi.string().required(),
            firstName: Joi.string().min(3).max(50).required(),
            lastName: Joi.string().min(3).max(50),
            email: Joi.string().email().required(),
          },
          obj
        );
      }
    
}


module.exports = new AuthValidator();
