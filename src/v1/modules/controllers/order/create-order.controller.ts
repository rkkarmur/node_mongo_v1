import { NextFunction, Request, Response } from "express";
import {
  formatError,
  successResponse,
} from "../../../../helpers/responsManager";
import { StatusCodes } from "../../../../config/Constant/statusCode";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../../../config/Constant/resMessage";
import { createCustomerService } from "../../services/customer/create-customer.service";
import { ICustomer } from "../../../../models/customer.schema";
import { IOrder } from "../../../../models/order.schema";
import { createOrderService } from "../../services/order/create-order.service";

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: IOrder = req.body;
    await createOrderService(input);
    successResponse(res, StatusCodes.CREATED, SuccessMessage.CREATED);
  } catch (e: any) {
    switch (e.message) {
      case "CUSTOMER_DATA_NOT_FOUND": {
        const error = formatError(
          StatusCodes.NOT_FOUND,
          ErrorMessage.CUSTOMER_DATA_NOT_FOUND
        );
        next(error);
        break;
      }
      default:
        next(e);
        break;
    }
  }
};
