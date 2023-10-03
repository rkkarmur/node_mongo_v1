import { NextFunction, Request, Response } from "express";
import { HttpError } from "../../config/commonDomains/HttpError";
import { StatusCodes } from "../../config/Constant/statusCode";
import { ErrorMessage, SuccessMessage } from "../../config/Constant/resMessage";

type HttpSuccessResponse = {
  data?: any;
};

type HttpErrorResponse = {
  code: number;
  message?: string;
};

export function errorResponse(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const apiError: HttpErrorResponse = {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ErrorMessage.INTERNAL_SERVER_ERROR,
  };

  if (error instanceof HttpError) {
    apiError.code = error.statusCode;
    apiError.message = error.message;
  } else {
    console.error(error);
  }
  res.status(apiError.code).send(apiError);
  next();
}

export function successResponse(
  res: Response,
  statusCode: StatusCodes,
  message: SuccessMessage,
  data?: any
): void {
  const response: HttpSuccessResponse = {};

  if (data) {
    response.data = data;
    res.status(statusCode).json(response.data);
  } else {
    res.status(statusCode).json(message);
  }

  return;
}

export const formatError = (statusCode: number, message: ErrorMessage | string) => {
  const error = new HttpError({
    statusCode,
    message,
  });
  return error;
};
