import { WorkspaceRole } from "@prisma/client";
import prisma from "../lib/prisma";
import { createWorkspaceUser } from "./workspace-users.service";

export const createWorkspaceInvitation = async (props: {
  workspaceId: string;
  email: string;
  role: WorkspaceRole;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: props.email,
    },
  });

  if (user) {
    const workspaceUser = await prisma.workspaceUser.findFirst({
      where: {
        userId: user.id,
        workspaceId: props.workspaceId,
        deletedAt: null,
      },
    });

    if (workspaceUser) {
      return;
    }

    await createWorkspaceUser({
      workspaceId: props.workspaceId,
      userId: user.id,
      role: props.role,
    });

    return;
  }

  return await prisma.workspaceInvitation.create({
    data: props,
  });
};

export const getWorkspaceInvitationsByWorkspaceId = async (
  workspaceId: string
) => {
  return await prisma.workspaceInvitation.findMany({
    where: {
      workspaceId,
      deletedAt: null,
    },
  });
};

export const deleteWorkspaceInvitation = async (id: string) => {
  return await prisma.workspaceInvitation.delete({
    where: {
      id,
    },
  });
};
