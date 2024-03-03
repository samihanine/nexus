import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { PropertyType } from "@prisma/client";

export const buyerSchema = z.object({
  id: z.string().uuid().nullish(),
  minimumPrice: z.number().default(0),
  maximumPrice: z.number().nullish(),
  minimumParkingSpots: z.number().default(0),
  minimumBedrooms: z.number().default(0),
  minimumBathrooms: z.number().default(0),
  minimumRooms: z.number().default(0),
  minimumLivableAreaInSquareFeet: z.number().default(0),
  minimumLandAreaInSquareFeet: z.number().default(0),
  minimumYearBuilt: z.number().default(0),
  buyingPeriod: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  radius: z.number(),
  description: z.string().default(""),
  propertyTypes: z.array(z.nativeEnum(PropertyType)),
  createdAt: z.string().or(z.date()).nullish(),
  updatedAt: z.string().or(z.date()).nullish(),
  deletedAt: z.string().or(z.date()).nullish(),
});

export type Buyer = z.infer<typeof buyerSchema>;

export const buyerApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/buyers",
    alias: "createBuyer",
    description: "Create buyer",
    response: buyerSchema,
    status: 201,
    parameters: [
      {
        name: "New Buyer",
        type: "Body",
        schema: buyerSchema.omit({
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        }),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    alias: "getBuyerById",
    path: "/buyers/:buyerId",
    description: "Get Buyer",
    response: buyerSchema,
    parameters: [
      {
        type: "Path",
        name: "buyerId",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    alias: "getBuyers",
    path: "/buyers",
    description: "Get Buyers",
    response: z.array(buyerSchema),
    parameters: [],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "patch",
    path: "/buyers/:buyerId",
    alias: "updateBuyer",
    description: "Update Buyer",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "buyerId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "buyer",
        schema: buyerSchema.partial(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "delete",
    path: "/buyers/:buyerId",
    description: "Delete Buyer",
    status: 204,
    alias: "deleteBuyer",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "buyerId",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .build();
