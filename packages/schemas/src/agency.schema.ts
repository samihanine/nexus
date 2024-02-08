import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { profileSchema } from "./profile.schema";
import { addressSchema } from "./address.schema";

export const agencySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
  addressId: z.string().uuid(),
  address: addressSchema.nullish(),
  profileId: z.string().uuid(),
  profile: profileSchema.nullish(),
});

export type Agency = z.infer<typeof agencySchema>;

export const agencyApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/agencies",
    alias: "createAgency",
    description: "Create agency",
    response: agencySchema,
    status: 201,
    parameters: [
      {
        name: "New Agency",
        type: "Body",
        schema: agencySchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true }),
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
    alias: "getAgency",
    path: "/agencies/:agencyId",
    description: "Get Agency",
    response: agencySchema,
    parameters: [
      {
        type: "Path",
        name: "agencyId",
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
    path: "/agencies/:agencyId",
    alias: "updateAgency",
    description: "Update Agency",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "agencyId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "agency",
        schema: agencySchema.partial(),
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
    path: "/agencies/:agencyId",
    description: "Delete Agency",
    status: 204,
    alias: "deleteAgency",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "agencyId",
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
