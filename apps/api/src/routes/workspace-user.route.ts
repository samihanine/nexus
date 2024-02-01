import { workspaceUserApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  deleteWorkspaceUser,
  getWorkspaceUsersByWorkspaceId,
} from "../services/workspace-users.service";
import { addUserToWorkspace } from "../services/workspace.service";
import prisma from "../lib/prisma";

export const workspaceUserRouter = zodiosRouter(workspaceUserApi, {
  transform: true,
});

workspaceUserRouter.post(
  "/workspace/:workspaceId/users",
  authMiddleware,
  async (request, response) => {
    try {
      const result = await addUserToWorkspace(request.body);

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

workspaceUserRouter.get(
  "/workspace/:workspaceId/users",
  authMiddleware,
  async (request, response) => {
    try {
      const result = await getWorkspaceUsersByWorkspaceId(
        request.params.workspaceId
      );
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceUserRouter.delete(
  "/workspace/:workspaceId/users/:userId",
  authMiddleware,
  async (request, response) => {
    try {
      const workspaceUser = await prisma.workspaceUser.findFirst({
        where: {
          userId: request.params.userId,
          workspaceId: request.params.workspaceId,
        },
      });

      if (!workspaceUser) {
        throw new Error("Workspace User not found");
      }

      const workspaces = await deleteWorkspaceUser(workspaceUser.id);

      response.json(workspaces);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
