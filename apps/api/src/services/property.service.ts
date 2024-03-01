import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createProperty = async (props: Prisma.PropertyCreateManyInput) => {
  return await prisma.property.create({
    data: {
      ...props,
    },
  });
};

export const updateProperty = async (
  id: string,
  data: Prisma.PropertyUpdateInput
) => {
  return await prisma.property.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
};

export const searchProperties = async (props: {
  limit?: number;
  offset?: number;
  profileId: string;
}) => {
  return await prisma.property.findMany({
    take: props.limit,
    skip: props.offset,
    where: {
      isVisible: true,
      isSold: false,
    },
    include: {
      profile: {
        include: {
          seller: true,
          owner: true,
        },
      },
      address: true,
    },
  });
};

export const getPropertyById = async (id: string) => {
  return await prisma.property.findUnique({
    where: {
      id,
    },
    include: {
      profile: {
        include: {
          seller: true,
          owner: true,
        },
      },
      address: true,
    },
  });
};

export const getPropertyByProfileId = async (profileId: string) => {
  return await prisma.property.findUnique({
    where: {
      profileId,
    },
    include: {
      profile: {
        include: {
          seller: true,
          owner: true,
        },
      },
      address: true,
    },
  });
};
