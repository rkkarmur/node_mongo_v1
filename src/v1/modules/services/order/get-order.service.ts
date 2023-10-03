import { commonRepository } from "../../../../repositories/common.repository";
import {  Order } from "../../../../models/order.schema";

export const getOrderService = async () => {
  const data = await commonRepository(Order).find();
  if (data?.length) {
    return data;
  } else {
    throw new Error("DATA_NOT_FOUND");
  }
};
