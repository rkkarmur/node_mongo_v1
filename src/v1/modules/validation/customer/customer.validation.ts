import Joi from "joi";

const customerSchema = Joi.object({
  name: Joi.string().max(100).required(),
  address: Joi.string().max(250).required(),
  mobile: Joi.string().length(10).required(),
  orders: Joi.array().items(Joi.string()), // Assuming orders are represented as strings
  profilePic: Joi.string().required(),
});

export default customerSchema;
