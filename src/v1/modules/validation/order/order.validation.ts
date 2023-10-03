import Joi from "joi";

const orderSchema = Joi.object({
  itemName: Joi.string().max(150).required(),
  itemPrice: Joi.number().required(),
  orderDate: Joi.date().iso().required(),
  customerId: Joi.string().required()
});

export default orderSchema;
