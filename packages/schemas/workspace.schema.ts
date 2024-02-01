import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const workspaceSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  googleDriveFolderId: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
});

export type Workspace = z.infer<typeof workspaceSchema>;

export const workspaceApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/workspaces/:workspaceId",
    alias: "getWorkspaceById",
    description: "Get Workspace by ID",
    response: workspaceSchema,
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
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "post",
    path: "/workspaces",
    alias: "createWorkspace",
    description: "Create a Workspace",
    response: workspaceSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Workspace Data",
        schema: z.object({
          name: z.string(),
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
    path: "/workspaces/:workspaceId",
    alias: "updateWorkspace",
    description: "Update a Workspace",
    status: 204,
    response: workspaceSchema,
    parameters: [
      {
        type: "Path",
        name: "workspaceId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "Workspace Data",
        schema: workspaceSchema.partial(),
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
    path: "/workspaces/:workspaceId",
    alias: "deleteWorkspace",
    description: "Delete a Workspace",
    status: 204,
    response: z.object({}),
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
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    path: "/users/:userId/workspaces",
    alias: "getWorkspacesByUserId",
    description: "Get Workspaces by User ID",
    status: 200,
    response: z.array(workspaceSchema),
    parameters: [
      {
        type: "Path",
        name: "userId",
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
