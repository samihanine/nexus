import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const addressSchema = z.object({
  id: z.string(),
  unit: z.string().nullish(),
  streetNumber: z.string().nullish(),
  streetName: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  formattedAddress: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
});

export type Address = z.infer<typeof addressSchema>;

export const addressApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/addresses/autocomplete",
    alias: "autocompleteAddress",
    description: "Autocomplete addresses",
    response: z.array(
      addressSchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      })
    ),
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
    status: 200,
  })
  .addEndpoint({
    method: "post",
    path: "/addresses",
    alias: "createAddress",
    description: "Create an address",
    response: addressSchema,
    parameters: [
      {
        name: "address",
        type: "Body",
        schema: addressSchema.omit({
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
    status: 201,
  })
  .addEndpoint({
    method: "put",
    path: "/addresses/:addressId",
    alias: "updateAddress",
    description: "Update an address",
    response: addressSchema,
    parameters: [
      {
        name: "address",
        type: "Body",
        schema: addressSchema.omit({
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
    status: 201,
  })
  .build();
