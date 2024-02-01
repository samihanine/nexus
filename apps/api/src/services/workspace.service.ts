import { updateGoogleDriveFolderName } from "../lib/google";
import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getWorkspacesByUserId = async (userId: string) => {
  return await prisma.workspace.findMany({
    where: {
      workspaceUsers: {
        some: {
          userId,
        },
      },
      deletedAt: null,
    },
  });
};

export const createWorkspace = async (
  workspace: Prisma.WorkspaceCreateManyInput
) => {
  return await prisma.workspace.create({
    data: workspace,
  });
};

export const getWorkspace = async (workspaceId: string) => {
  return await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
      deletedAt: null,
    },
  });
};

export const deleteWorkspace = async (workspaceId: string) => {
  return await prisma.workspace.update({
    where: {
      id: workspaceId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};

export const addUserToWorkspace = async ({
  userId,
  workspaceId,
}: {
  userId: string;
  workspaceId: string;
}) => {
  return await prisma.workspaceUser.create({
    data: {
      userId,
      workspaceId,
      role: "ADMINISTRATOR",
    },
  });
};

export const updateWorkspace = async ({
  id,
  name,
}: {
  id: string;
  name?: string;
}) => {
  const organization = await prisma.workspace.findUnique({
    where: {
      id,
    },
    include: {
      organization: true,
    },
  });

  const workspace = await prisma.workspace.findUnique({
    where: {
      id,
    },
  });

  if (!organization) {
    throw new Error("Organization not found");
  }

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  if (name && name !== workspace?.name) {
    await updateGoogleDriveFolderName({
      name: name,
      googleDriveFolderId: workspace.googleDriveFolderId,
      googleDriveCredentials:
        organization?.organization?.googleDriveCredentials,
    });
  }

  return await prisma.workspace.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};
