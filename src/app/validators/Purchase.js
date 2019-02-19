const Joi = require('joi')

module.exports = {
  body: {
    ad: Joi.string().required(),
    password: Joi.string().required()
  }
}
