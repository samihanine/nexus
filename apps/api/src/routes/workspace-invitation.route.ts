import { workspaceInvitationApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  deleteWorkspaceInvitation,
  getWorkspaceInvitationsByWorkspaceId,
  createWorkspaceInvitation,
} from "../services/workspace-invitations.service";

export const workspaceInvitationRouter = zodiosRouter(workspaceInvitationApi, {
  transform: true,
});

workspaceInvitationRouter.post(
  "/workspace/:workspaceId/invitations",
  authMiddleware as any,
  async (request, response) => {
    try {
      const result = await createWorkspaceInvitation({
        workspaceId: request.params.workspaceId as string,
        email: request.body.email,
        role: request.body.role as any,
      });

      response.status(201).json(result);
    } catch (error) {
      console.log(error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceInvitationRouter.get(
  "/workspace/:workspaceId/invitations",
  authMiddleware,
  async (request, response) => {
    try {
      response.json(
        await getWorkspaceInvitationsByWorkspaceId(request.params.workspaceId)
      );
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceInvitationRouter.delete(
  "/workspace/:workspaceId/invitations/:invitationId",
  authMiddleware as any,
  async (request, response) => {
    try {
      const workspaces = await deleteWorkspaceInvitation(
        request.params.invitationId
      );

      response.json(workspaces);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
