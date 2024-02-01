import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const organizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
});

export type Organization = z.infer<typeof organizationSchema>;

const organizationUserSchema = z.object({
  organizationId: z.string(),
  role: z.string(),
});

export const organizationApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/organizations",
    alias: "getOrganizations",
    description: "Get Organizations owned by the current User",
    response: z.array(organizationSchema),
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "post",
    path: "/organizations",
    alias: "createOrganization",
    description: "Create an Organization",
    response: organizationSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Organization Data",
        schema: organizationSchema.omit({
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          credits: true,
          stripeCustomerId: true,
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
    method: "patch",
    path: "/organizations/:organizationId",
    alias: "updateOrganization",
    description: "Update an Organization",
    response: organizationSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Organization Data",
        schema: organizationSchema.partial(),
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
    path: "/organizations/:organizationId",
    alias: "getOrganizationById",
    description: "Get an Organization by ID",
    response: organizationSchema,
    parameters: [
      {
        type: "Path",
        name: "organizationId",
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
    method: "post",
    path: "/organizations/:organizationId/users",
    alias: "addUserToOrganization",
    description: "Add a User to an Organization",
    response: organizationUserSchema,
    status: 201,
    parameters: [
      {
        type: "Path",
        name: "organizationId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "User and Role Data",
        schema: organizationUserSchema.omit({ organizationId: true }),
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
    method: "delete",
    path: "/organizations/:organizationId",
    alias: "deleteOrganization",
    description: "Delete an Organization",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "organizationId",
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
