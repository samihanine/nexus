import { zodiosRouter } from "@zodios/express";
import { addressApi } from "@nexus/schemas";
import {
  autocompleteAddress,
  updateAddress,
} from "../services/address.service";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createAddress } from "../services/address.service";

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

addressRouter.post("/addresses", authMiddleware, async (request, response) => {
  try {
    const address = await createAddress(request.body);
    response.status(201).json(address);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

addressRouter.patch(
  "/addresses/:addressId",
  authMiddleware as any,
  async (request, response) => {
    try {
      const address = await updateAddress(request.body);
      response.status(201).json(address);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
