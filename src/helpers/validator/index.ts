import { NextFunction, Request, Response } from "express";
import * as Joi from 'joi'
import _ from "lodash";
import { formatError } from "../responsManager";
import { StatusCodes } from "../../config/Constant/statusCode";

export const validator = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const paramsData = _.assign(req.params, req.query);
    const data = _.assign(req.body, paramsData);

    const isValid = schema.validate(data,{abortEarly: true});

    if (isValid.error) {
      const error = formatError(StatusCodes.BAD_REQUEST, isValid.error.details[0].message);
      next(error);
    } else {
      next();
    }
  };
};
