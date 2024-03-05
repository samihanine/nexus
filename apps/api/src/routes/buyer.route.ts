import { buyerApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createBuyer,
  updateBuyer,
  getBuyerByProfileId,
  searchBuyers,
} from "../services/buyer.service";

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
      response.status(200).json(
        await updateBuyer(request.params.buyerId, {
          ...request.body,
          profile: undefined,
        })
      );
    } catch (error) {
      console.error("Error getting current buyer", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

buyerRouter.get(
  "/profiles/:profileId/buyer",
  authMiddleware,
  async (request, response) => {
    try {
      const profile = await getBuyerByProfileId(request.params.profileId);

      if (!profile) {
        return response
          .status(404)
          .json({ message: "Buyer not found", code: "BUYER_NOT_FOUND" });
      }

      response.status(200).json(profile);
    } catch (error) {
      console.error("Error getting current buyer", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

buyerRouter.get(
  "/buyers/search",
  authMiddleware as any,
  async (request, response) => {
    try {
      const result = await searchBuyers(request.query);

      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
