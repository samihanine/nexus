import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";
import { userSchema } from "./user.schema";

const workspaceUserSchema = z.object({
  id: z.string(),
  workspaceId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
  user: userSchema.nullish(),
});

export type WorkspaceUser = z.infer<typeof workspaceUserSchema>;

export const workspaceUserApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/workspace/:workspaceId/users",
    alias: "getWorkspaceUsers",
    description: "Get Workspace Users",
    response: z.array(workspaceUserSchema),
    status: 200,
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
    path: "/workspace/:workspaceId/users",
    alias: "createWorkspaceUser",
    description: "Create an WorkspaceUser",
    response: z.any(),
    status: 201,
    parameters: [
      {
        type: "Path",
        name: "workspaceId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "WorkspaceUser Data",
        schema: workspaceUserSchema.omit({
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
    method: "delete",
    path: "/workspace/:workspaceId/users/:userId",
    alias: "deleteWorkspaceUser",
    description: "Delete an WorkspaceUser",
    response: workspaceUserSchema,
    status: 204,
    parameters: [
      {
        type: "Path",
        name: "userId",
        schema: z.string(),
      },
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
    method: "patch",
    path: "/workspace/:workspaceId/users/:userId",
    alias: "updateWorkspaceUser",
    description: "Update an WorkspaceUser",
    response: workspaceUserSchema,
    status: 200,
    parameters: [
      {
        type: "Path",
        name: "userId",
        schema: z.string(),
      },
      {
        type: "Path",
        name: "workspaceId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "WorkspaceUser Data",
        schema: workspaceUserSchema.partial(),
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
