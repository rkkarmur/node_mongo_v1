import { ErrorMessage } from "../Constant/resMessage";
import { StatusCodes } from "../Constant/statusCode";

export class HttpError extends Error {
  message: ErrorMessage | string = ErrorMessage.INTERNAL_SERVER_ERROR;
  statusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR;
  constructor(error: { statusCode: number; message: ErrorMessage | string }) {
    super(error.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = error.message;
    this.statusCode = error.statusCode;

    Error.captureStackTrace(this);
  }
}
