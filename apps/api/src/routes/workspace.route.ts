import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { workspaceApi } from "@nexus/schemas";
import {
  addUserToWorkspace,
  createWorkspace,
  deleteWorkspace,
  getWorkspace,
  getWorkspacesByUserId,
  updateWorkspace,
} from "../services/workspace.service";
import { getUserById } from "../services/user.service";
import { createGoogleDriveFolder } from "../lib/google";
import { getOrganization } from "../services/organization.service";

export const workspaceRouter = zodiosRouter(workspaceApi, {
  transform: true,
});

workspaceRouter.post(
  "/workspaces",
  authMiddleware,
  async (request, response) => {
    try {
      const user = await getUserById(request.user.id);

      if (!user) {
        throw new Error("User not found");
      }

      // TODO: Check if user is admin of organization

      const organization = await getOrganization(user.organizationId);

      if (!organization) {
        throw new Error("Organization not found");
      }

      const googleDriveFolderId = await createGoogleDriveFolder({
        name: request.body.name,
        googleDriveFolderId: organization.googleDriveFolderId,
        googleDriveCredentials: organization.googleDriveCredentials,
      });

      const newWorkspace = await createWorkspace({
        name: request.body.name,
        organizationId: user.organizationId,
        googleDriveFolderId,
      });

      await addUserToWorkspace({
        userId: user.id,
        workspaceId: newWorkspace.id,
      });

      response.status(201).json(newWorkspace);
    } catch (error) {
      console.log(error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceRouter.get(
  "/workspaces/:workspaceId",
  authMiddleware,
  async (request, response) => {
    try {
      const workspace = await getWorkspace(request.params.workspaceId);

      if (!workspace) {
        return response.status(404).json({
          message: "Workspace not found",
          code: "ORGANIZATION_NOT_FOUND",
        });
      }

      response.json(workspace);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceRouter.get(
  "/users/:userId/workspaces",
  authMiddleware,
  async (request, response) => {
    try {
      const workspaces = await getWorkspacesByUserId(request.params.userId);

      response.json(workspaces);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceRouter.delete(
  "/workspaces/:workspaceId",
  authMiddleware,
  async (request, response) => {
    try {
      await deleteWorkspace(request.params.workspaceId);
      response.status(204).send();
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

workspaceRouter.patch(
  "/workspaces/:workspaceId",
  authMiddleware,
  async (request, response) => {
    try {
      const result = await updateWorkspace({
        id: request.params.workspaceId,
        ...request.body,
      });

      response.status(204).send(result);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
