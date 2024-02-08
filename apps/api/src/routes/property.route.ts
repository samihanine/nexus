import { zodiosRouter } from "@zodios/express";
import { propertyApi } from "@nexus/schemas";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createProperty, updateProperty } from "../services/property.service";
import express from "express";

export const propertyRouter = zodiosRouter(propertyApi, { transform: true });

propertyRouter.post("/properties", authMiddleware, async (request, response) => {
  try {
    const property = await createProperty({
      ...request.body,
    });
    response.status(200).json(property);
  } catch (error) {
    console.error("Error creating property", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

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
