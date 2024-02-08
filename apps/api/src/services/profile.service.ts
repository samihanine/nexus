import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createProfile = async (props: Prisma.ProfileCreateManyInput) => {
  return await prisma.profile.create({
    data: {
      ...props,
    },
  });
};

export const updateProfile = async (
  id: string,
  data: Prisma.ProfileUpdateInput
) => {
  if (data.buyer) {
    await prisma.buyer.upsert({
      // @ts-ignore
      update: {
        ...data.buyer,
      },
      // @ts-ignore
      create: {
        ...data.buyer,
        profileId: id,
      },
      where: {
        profileId: id,
      },
    });
  }

  if (data.seller) {
    await prisma.seller.upsert({
      // @ts-ignore
      update: {
        ...data.seller,
      },
      // @ts-ignore
      create: {
        ...data.seller,
        profileId: id,
      },
      where: {
        profileId: id,
      },
    });
  }

  if (data.broker) {
    await prisma.broker.upsert({
      // @ts-ignore
      update: {
        ...data.broker,
      },
      // @ts-ignore
      create: {
        ...data.broker,
        profileId: id,
      },
      where: {
        profileId: id,
      },
    });
  }

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
