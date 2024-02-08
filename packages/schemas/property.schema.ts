import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const propertySchema = z.object({
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
        schema: propertySchema.omit({ id: true }),
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
