import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const sellerSchema = z.object({
  id: z.string().uuid().nullish(),
  profileId: z.string().uuid(),
  createdAt: z.string().or(z.date()).nullish(),
  updatedAt: z.string().or(z.date()).nullish(),
  deletedAt: z.string().or(z.date()).nullish(),
});

export type Seller = z.infer<typeof sellerSchema>;

export const sellerApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/sellers",
    alias: "createSeller",
    description: "Create seller",
    response: sellerSchema,
    status: 201,
    parameters: [
      {
        name: "New Seller",
        type: "Body",
        schema: sellerSchema.omit({
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
    alias: "getSellerById",
    path: "/sellers/:sellerId",
    description: "Get Seller",
    response: sellerSchema,
    parameters: [
      {
        type: "Path",
        name: "sellerId",
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
    alias: "getSellers",
    path: "/sellers",
    description: "Get Sellers",
    response: z.array(sellerSchema),
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
    path: "/sellers/:sellerId",
    alias: "updateSeller",
    description: "Update Seller",
    status: 204,
    response: sellerSchema,
    parameters: [
      {
        type: "Path",
        name: "sellerId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "seller",
        schema: sellerSchema
          .omit({
            id: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
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
    path: "/sellers/:sellerId",
    description: "Delete Seller",
    status: 204,
    alias: "deleteSeller",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "sellerId",
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
