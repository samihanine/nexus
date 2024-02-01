import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export const createWorkspaceUser = async (
  props: Prisma.WorkspaceUserCreateManyInput
) => {
  return await prisma.workspaceUser.create({
    data: props,
  });
};

export const getWorkspaceUsersByWorkspaceId = async (workspaceId: string) => {
  return await prisma.workspaceUser.findMany({
    where: {
      workspaceId,
      deletedAt: null,
    },
    include: {
      user: true,
    },
  });
};

export const deleteWorkspaceUser = async (id: string) => {
  return await prisma.workspaceUser.delete({
    where: {
      id,
    },
  });
};
