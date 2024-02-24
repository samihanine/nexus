import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createProfileUser = async (
  props: Prisma.ProfileUserCreateManyInput
) => {
  return await prisma.profileUser.create({
    data: {
      userId: props.userId,
      profileId: props.profileId,
      role: props.role,
    },
  });
};

export const getProfileUserById = async (id: string) => {
  return await prisma.profileUser.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      profile: {
        include: {
          buyer: true,
          seller: true,
          broker: true,
        },
      },
    },
  });
};
