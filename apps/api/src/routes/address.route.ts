import { zodiosRouter } from "@zodios/express";
import { addressApi } from "@nexus/schemas";
import { autocompleteAddress } from "../services/address.service";
import { authMiddleware } from "../middlewares/auth.middleware";

export const addressRouter = zodiosRouter(addressApi, { transform: true });

addressRouter.get(
  "/addresses/autocomplete",
  authMiddleware,
  async (request, response) => {
    try {
      const addresses = await autocompleteAddress(request.query.query);
      response.status(200).json(addresses);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
