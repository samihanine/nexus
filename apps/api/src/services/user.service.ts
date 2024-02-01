import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const createUser = async (newUser: Prisma.UserCreateManyInput) => {
  const workspaceInvitations = await prisma.workspaceInvitation.findMany({
    where: {
      email: newUser.email,
      deletedAt: null,
    },
  });

  if (workspaceInvitations.length === 0) {
    throw new Error("No workspace invitation found");
  }

  const user = await prisma.user.create({
    data: newUser,
  });

  for (const workspaceInvitation of workspaceInvitations) {
    await prisma.workspaceUser.create({
      data: {
        userId: user.id,
        workspaceId: workspaceInvitation.workspaceId,
        role: workspaceInvitation.role,
      },
    });

    await prisma.workspaceInvitation.update({
      where: {
        id: workspaceInvitation.id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  return user;
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};
