const Joi = require("joi");

const taskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),

    description: Joi.string().min(5).required(),

    subject: Joi.string().required(),

    priority: Joi.string()
      .valid("Low", "Medium", "High")
      .optional(),

    status: Joi.string()
      .valid("Pending", "In Progress", "Completed")
      .optional(),

    dueDate: Joi.date().required(),
  });

  return schema.validate(data);
};

module.exports = taskValidation;