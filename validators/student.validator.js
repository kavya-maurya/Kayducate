const Joi = require("joi");

const studentSchema = Joi.object({
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

    city: Joi.string()
        .min(2)
        .max(50)
        .required(),

    course: Joi.string()
        .min(2)
        .max(50)
        .required()
});

module.exports = studentSchema;