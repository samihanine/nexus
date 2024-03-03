import { sellerApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createSeller, updateSeller } from "../services/seller.service";

export const sellerRouter = zodiosRouter(sellerApi, { transform: true });

sellerRouter.post("/sellers", authMiddleware, async (request, response) => {
  try {
    const seller = await createSeller(request.body);

    response.status(200).json(seller);
  } catch (error) {
    console.error("Error creating seller", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

sellerRouter.patch(
  "/sellers/:sellerId",
  authMiddleware,
  async (request, response) => {
    try {
      response
        .status(200)
        .json(await updateSeller(request.params.sellerId, {}));
    } catch (error) {
      console.error("Error getting current seller", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
