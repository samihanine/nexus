import { zodiosRouter } from "@zodios/express";
import { propertyApi } from "@nexus/schemas";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createProperty,
  updateProperty,
  searchProperties,
  getPropertyById,
  getPropertyByProfileId,
} from "../services/property.service";

export const propertyRouter = zodiosRouter(propertyApi, { transform: true });

propertyRouter.post(
  "/properties",
  authMiddleware,
  async (request, response) => {
    try {
      const property = await createProperty({
        ...request.body,
      });
      response.status(200).json(property);
    } catch (error) {
      console.log("Error creating property", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

propertyRouter.get(
  "/properties/search",
  authMiddleware as any,
  async (request, response) => {
    try {
      response.status(200).json(await searchProperties(request.query));
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
propertyRouter.get(
  "/profiles/:profileId/property",
  authMiddleware as any,
  async (request, response) => {
    try {
      const property = await getPropertyByProfileId(request.params.profileId);

      if (!property) {
        return response.status(404).json({
          message: "Property not found",
          code: "PROPERTY_NOT_FOUND",
        });
      }

      response.status(200).json(property);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

propertyRouter.patch(
  "/properties/:propertyId",
  authMiddleware,
  async (request, response) => {
    try {
      response
        .status(200)
        // @ts-ignore
        .json(await updateProperty(request.params.propertyId, request.body));
    } catch (error) {
      console.error("Error getting current property", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

propertyRouter.get(
  "/properties/:propertyId",
  authMiddleware,
  async (request, response) => {
    try {
      const property = await getPropertyById(request.params.propertyId);

      if (!property) {
        return response.status(404).json({
          message: "Property not found",
          code: "PROPERTY_NOT_FOUND",
        });
      }

      response.status(200).json(property);
    } catch (error) {
      console.error("Error getting current property", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
