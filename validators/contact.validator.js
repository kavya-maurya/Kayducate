const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            "string.pattern.base": "Phone number must be exactly 10 digits."
        }),

    subject: Joi.string()
        .min(3)
        .max(100)
        .required(),

    message: Joi.string()
        .min(5)
        .max(500)
        .required()
});

module.exports = schema;