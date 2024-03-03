import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createProfile = async (props: Prisma.ProfileCreateInput) => {
  const profile = await prisma.profile.create({
    data: {
      type: props.type,
      firstName: props.firstName,
      lastName: props.lastName,
      imageUrl: props.imageUrl,
    },
  });

  return await getProfileById(profile.id);
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

export const getProfileById = async (id: string) => {
  return await prisma.profile.findUnique({
    where: {
      id,
    },
    include: {
      buyer: true,
      seller: true,
      broker: {
        include: {
          agency: true,
        },
      },
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
    include: {
      buyer: true,
      seller: true,
      broker: {
        include: {
          agency: true,
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
    include: {
      buyer: true,
      seller: true,
      broker: {
        include: {
          agency: true,
        },
      },
    },
  });
};
