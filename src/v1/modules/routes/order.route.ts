import { Request, Response, Router } from "express";
import { getCustomerController } from "../controllers/customer/get-customer.controller";
import { createCustomerController } from "../controllers/customer/create-customer.controller";
import customerSchema from "../validation/customer/customer.validation";
import { validator } from "../../../helpers/validator";
import { getOrderController } from "../controllers/order/get-order.controller";
import { createOrderController } from "../controllers/order/create-order.controller";
import orderSchema from "../validation/order/order.validation";

const route = Router();

route.get("/", getOrderController);
route.post("/",validator(orderSchema), createOrderController);


export const orderRoute = route;
