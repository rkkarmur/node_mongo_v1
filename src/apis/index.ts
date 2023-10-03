import { Router } from "express";
import { customerRoute } from "../v1/modules/routes/customer.route";
import { errorResponse } from "../helpers/responsManager";
import { StatusCodes } from "../config/Constant/statusCode";
import { orderRoute } from "../v1/modules/routes/order.route";

export class V1Routes {
  public path() {
    const router = Router();

    router.use("/customer", customerRoute);
    router.use("/order", orderRoute);


    router.all("**", (req, res) => {
      return res.status(StatusCodes.NOT_FOUND).json({
        version: "1.0",
      });
    });

    router.use(errorResponse);

    return router;
  }
}
