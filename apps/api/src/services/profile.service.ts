import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createProfile = async (props: Prisma.ProfileCreateManyInput) => {
  const profile = await prisma.profile.create({
    data: {
      type: props.type,
      firstName: props.firstName,
      lastName: props.lastName,
      imageUrl: props.imageUrl,
    },
  });

  return profile;
};

export const updateProfile = async (
  id: string,
  data: Prisma.ProfileUpdateManyMutationInput
) => {
  return await prisma.profile.update({
    where: {
      id,
    },
    data: {
      type: data.type,
      firstName: data.firstName,
      lastName: data.lastName,
      imageUrl: data.imageUrl,
    },
  });
};

export const getProfileById = async (id: string) => {
  return await prisma.profile.findUnique({
    where: {
      id,
    },
  });
};

export const getProfilesByUserId = async (userId: string) => {
  return await prisma.profile.findMany({
    where: {
      profileUsers: {
        some: {
          userId,
        },
      },
    },
  });
};

export const getCurrentProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user?.currentProfileId) return null;

  return await prisma.profile.findFirst({
    where: {
      id: user.currentProfileId,
    },
  });
};
