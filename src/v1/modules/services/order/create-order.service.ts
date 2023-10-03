import { Customer } from "../../../../models/customer.schema";
import { IOrder, Order } from "../../../../models/order.schema";
import { commonRepository } from "../../../../repositories/common.repository";

export const createOrderService = async (input: IOrder) => {
  const customer = await commonRepository(Customer).findOne({
    _id: String(input.customerId),
  });
  if (!customer) {
    throw new Error("CUSTOMER_DATA_NOT_FOUND");
  }
  delete input.customerId
  const order = await commonRepository(Order).create(input);
  if (order?._id) {
    const data = [...customer.orders];
    data.push(order?._id);
    await commonRepository(Customer).update({ _id: customer?._id }, {orders: data});
  }
};
