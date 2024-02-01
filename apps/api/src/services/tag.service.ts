import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getTagsByOrganizationId = async (organizationId: string) => {
  return await prisma.tag.findMany({
    where: {
      organizationId,
      deletedAt: null,
    },
  });
};

export const getTagsByWorkspaceId = async (workspaceId: string) => {
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
      deletedAt: null,
    },
  });

  if (!workspace) {
    throw new Error("Workspace not found");
  }

  return await prisma.tag.findMany({
    where: {
      organizationId: workspace.organizationId,
      deletedAt: null,
    },
  });
};

export const createTag = async (tag: Prisma.TagCreateManyInput) => {
  return await prisma.tag.create({
    data: tag,
  });
};

export const getTag = async (tagId: string) => {
  return await prisma.tag.findFirst({
    where: {
      id: tagId,
      deletedAt: null,
    },
  });
};

export const deleteTag = async (tagId: string) => {
  return await prisma.tag.update({
    where: {
      id: tagId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
