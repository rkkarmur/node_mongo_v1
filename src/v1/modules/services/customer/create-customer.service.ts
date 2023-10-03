import { Customer, ICustomer } from "../../../../models/customer.schema";
import { commonRepository } from "../../../../repositories/common.repository";

export const createCustomerService = async (input: ICustomer) => {
  await commonRepository(Customer).create(input);
};
