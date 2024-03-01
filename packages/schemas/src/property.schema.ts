import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { profileSchema } from "./profile.schema";
import { addressSchema } from "./address.schema";
import { PropertyType } from "@prisma/client";

export const propertySchema = z.object({
  id: z.string().uuid(),
  type: z.nativeEnum(PropertyType),
  sellingPeriod: z.string().default("0-6"),
  description: z.string().default(""),
  mainImageUrl: z.string().nullish(),
  imageUrls: z.array(z.string()).default([]),
  price: z.number().default(0),
  currency: z.string().default("CAD"),
  rent: z.number().default(0),
  parkingSpots: z.number().default(0),
  yearBuilt: z.number().default(0),
  stories: z.number().default(0),
  mlsNumber: z.string().nullish(),
  garages: z.number().default(0),
  livableAreaInSquareFeet: z.number().default(0),
  landAreaInSquareFeet: z.number().default(0),
  rooms: z.number().default(1),
  bedrooms: z.number().default(1),
  bathrooms: z.number().default(1),
  hasRefrigerator: z.boolean().default(false),
  hasDishwasher: z.boolean().default(false),
  hasSauna: z.boolean().default(false),
  hasPool: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
  addressId: z.string().uuid(),
  address: addressSchema.nullish(),
  profileId: z.string().uuid(),
  profile: profileSchema.nullish(),
});

export type Property = z.infer<typeof propertySchema>;

export const propertyApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/properties",
    alias: "createProperty",
    description: "Create property",
    response: propertySchema,
    status: 201,
    parameters: [
      {
        name: "New Property",
        type: "Body",
        schema: propertySchema.omit({
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
    alias: "getPropertyByProfileId",
    path: "/profiles/:profileId/property",
    description: "Get Property",
    response: propertySchema,
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
  .addEndpoint({
    method: "get",
    alias: "getPropertyById",
    path: "/properties/:propertyId",
    description: "Get Property",
    response: propertySchema,
    parameters: [
      {
        type: "Path",
        name: "propertyId",
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
    alias: "searchProperties",
    path: "/properties/search",
    description: "Search Properties",
    response: z.array(propertySchema),
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
    method: "patch",
    path: "/properties/:propertyId",
    alias: "updateProperty",
    description: "Update Property",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "propertyId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "property",
        schema: propertySchema.partial(),
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
    path: "/properties/:propertyId",
    description: "Delete Property",
    status: 204,
    alias: "deleteProperty",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "propertyId",
        schema: z.number(),
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
