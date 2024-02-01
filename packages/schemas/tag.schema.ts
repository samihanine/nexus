import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const tagSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  color: z.string(),
  isDefalut: z.boolean().nullish(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
});

export type Tag = z.infer<typeof tagSchema>;

export const tagApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/tags/:tagId",
    alias: "getTagById",
    description: "Get Tag by ID",
    response: tagSchema,
    parameters: [
      {
        type: "Path",
        name: "tagId",
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
    path: "/organizations/:organizationId/tags",
    alias: "getTagsByOrganizationId",
    description: "Get Tags by Organization ID",
    response: z.array(tagSchema),
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
    ],
  })
  .addEndpoint({
    method: "get",
    path: "/workspaces/:workspaceId/tags",
    alias: "getTagsByWorkspaceId",
    description: "Get Tags by Workspace ID",
    response: z.array(tagSchema),
    parameters: [
      {
        type: "Path",
        name: "workspaceId",
        schema: z.string(),
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
    method: "post",
    path: "/tags",
    alias: "createTag",
    description: "Create an Tag",
    response: tagSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Tag Data",
        schema: tagSchema.omit({
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
    method: "patch",
    path: "/tags/:tagId",
    alias: "updateTag",
    description: "Update an Tag",
    response: tagSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Tag Data",
        schema: tagSchema.partial(),
      },
      {
        type: "Path",
        name: "tagId",
        schema: z.string(),
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
    path: "/tags/:tagId",
    alias: "deleteTag",
    description: "Delete an Tag",
    response: tagSchema,
    status: 204,
    parameters: [
      {
        type: "Path",
        name: "tagId",
        schema: z.string(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .build();
