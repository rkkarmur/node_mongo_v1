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

export const createCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: ICustomer = req.body;
    input.orders = [];
    await createCustomerService(input);
    successResponse(res, StatusCodes.CREATED, SuccessMessage.CREATED);
  } catch (e: any) {
    next(e);
  }
};
