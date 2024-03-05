import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { PropertyType } from "@prisma/client";
import { addressSchema } from "./address.schema";
import { profileSchema } from "./profile.schema";

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
  hasBasement: z.boolean().default(false),
  hasElevator: z.boolean().default(false),
  hasSauna: z.boolean().default(false),
  hasPool: z.boolean().default(false),
  hasFireplace: z.boolean().default(false),
  hasGym: z.boolean().default(false),
  hasAirConditioning: z.boolean().default(false),
  buyingPeriod: z.string().default("0-6"),
  radius: z.number(),
  description: z.string().default(""),
  propertyType: z.nativeEnum(PropertyType),
  addressId: z.string().uuid(),
  address: addressSchema.nullish(),
  profileId: z.string().uuid(),
  profile: profileSchema.nullish(),
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
    response: buyerSchema,
    parameters: [
      {
        type: "Path",
        name: "buyerId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "buyer",
        schema: buyerSchema
          .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
            address: true,
            profile: true,
          })
          .partial(),
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
  .addEndpoint({
    method: "get",
    alias: "searchBuyers",
    path: "/buyers/search",
    description: "Search Properties",
    response: z.array(buyerSchema),
    parameters: [
      {
        type: "Query",
        name: "profileId",
        schema: z.string(),
      },
      {
        type: "Query",
        name: "limit",
        schema: z.number().optional(),
      },
      {
        type: "Query",
        name: "offset",
        schema: z.number().optional(),
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
    alias: "getBuyerByProfileId",
    path: "/profiles/:profileId/buyer",
    description: "Get Buyer by Profile",
    response: buyerSchema,
    parameters: [
      {
        type: "Path",
        name: "profileId",
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
