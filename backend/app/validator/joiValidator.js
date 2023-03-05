const Joi = require("joi")
const createError = require( 'http-errors')

class JoiValidator {
    validate(joiSchema, obj) {
      const objectSchema = Joi.object(joiSchema);
      const { value, error } = objectSchema.validate(obj);
      if (error) throw  createError.BadRequest(error.details[0].message);
      return value;
    }
    validateEmail(email) {
      return this.validate({
        email: Joi.string().email()
      }, { email })
    }
    validateOtp(otp) {
      return this.validate({
        otp: Joi.string().min(6).max(7)
      }, { otp })
    }
  
  }

  module.exports = JoiValidator