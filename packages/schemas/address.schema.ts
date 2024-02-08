import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

const addressSchema = z
  .object({
    streetNumber: z.string(),
    streetName: z.string(),
    city: z.string(),
    region: z.string(),
    postalCode: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    formattedAddress: z.string(),
  })
  .partial();

export const addressApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/addresses/autocomplete",
    alias: "autocompleteAddress",
    description: "Autocomplete addresses",
    response: z.array(addressSchema),
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
  .build();
