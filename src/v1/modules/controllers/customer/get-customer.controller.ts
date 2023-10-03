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
import { getCustomerService } from "../../services/customer/get-customer.service";

export const getCustomerController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await getCustomerService();
    successResponse(res, StatusCodes.OK, SuccessMessage.OK, customers);
  } catch (e: any) {
    switch (e.message) {
      case "DATA_NOT_FOUND": {
        const error = formatError(
          StatusCodes.NOT_FOUND,
          ErrorMessage.NOT_FOUND
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
