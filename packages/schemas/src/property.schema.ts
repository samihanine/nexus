import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { profileSchema } from "./profile.schema";
import { addressSchema } from "./address.schema";

export const propertySchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string().default(""),
  imageUrl: z.string().nullish(),
  price: z.number().default(0),
  currency: z.string().default("CAD"),
  rent: z.number().default(0),
  parkingSpots: z.number().default(0),
  yearBuilt: z.number().default(0),
  stories: z.number().default(0),
  mlsNumber: z.string().default(""),
  garages: z.number().default(0),
  landSize: z.number().default(0),
  rooms: z.number().default(1),
  bedrooms: z.number().default(1),
  bathrooms: z.number().default(1),
  squareFeet: z.number().default(0),
  propertyType: z.string(),
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
        schema: propertySchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true }),
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
    alias: "getProperty",
    path: "/properties/:propertyId",
    description: "Get Property",
    response: propertySchema,
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
