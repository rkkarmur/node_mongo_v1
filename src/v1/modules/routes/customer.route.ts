import { Request, Response, Router } from "express";
import { getCustomerController } from "../controllers/customer/get-customer.controller";
import { createCustomerController } from "../controllers/customer/create-customer.controller";
import customerSchema from "../validation/customer/customer.validation";
import { validator } from "../../../helpers/validator";

const route = Router();

route.get("/", getCustomerController);
route.post("/",validator(customerSchema), createCustomerController);


export const customerRoute = route;
