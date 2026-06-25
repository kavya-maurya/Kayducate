const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required(),

    course: Joi.string()
        .min(2)
        .max(50)
        .required()
});

module.exports = schema;