import { buyerApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createBuyer, updateBuyer } from "../services/buyer.service";

export const buyerRouter = zodiosRouter(buyerApi, { transform: true });

buyerRouter.post("/buyers", authMiddleware, async (request, response) => {
  try {
    const buyer = await createBuyer(request.body);

    response.status(200).json(buyer);
  } catch (error) {
    console.error("Error creating buyer", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

buyerRouter.patch(
  "/buyers/:buyerId",
  authMiddleware,
  async (request, response) => {
    try {
      response
        .status(200)
        .json(await updateBuyer(request.params.buyerId, request.body));
    } catch (error) {
      console.error("Error getting current buyer", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
