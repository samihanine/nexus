import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const workpsaceInvitationSchema = z.object({
  id: z.string(),
  workspaceId: z.string(),
  email: z.string(),
  role: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
});

export type WorkspaceInvitation = z.infer<typeof workpsaceInvitationSchema>;

export const workspaceInvitationApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/workspace/:workspaceId/invitations",
    alias: "getWorkspaceInvitations",
    description: "Get Workspace Invitations",
    response: z.array(workpsaceInvitationSchema),
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
    path: "/workspace/:workspaceId/invitations",
    alias: "createWorkspaceInvitation",
    description: "Create an WorkspaceInvitation",
    response: z.any(),
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "WorkspaceInvitation Data",
        schema: workpsaceInvitationSchema.omit({
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
    path: "/workspace/:workspaceId/invitations/:invitationId",
    alias: "deleteWorkspaceInvitation",
    description: "Delete an WorkspaceInvitation",
    response: workpsaceInvitationSchema,
    status: 204,
    parameters: [
      {
        type: "Path",
        name: "invitationId",
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
