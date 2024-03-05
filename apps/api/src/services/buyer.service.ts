import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createBuyer = async (props: Prisma.BuyerCreateManyInput) => {
  return await prisma.buyer.create({
    data: {
      ...props,
    },
  });
};

export const updateBuyer = async (
  id: string,
  data: Prisma.BuyerUpdateInput
) => {
  return await prisma.buyer.update({
    data: {
      ...data,
    },
    where: {
      id,
    },
  });
};

export const getBuyerByProfileId = async (profileId: string) => {
  return await prisma.buyer.findFirst({
    where: {
      profileId,
    },
    include: {
      profile: true,
      address: true,
    },
  });
};

export const searchBuyers = async (props: {
  limit?: number;
  offset?: number;
  profileId: string;
}) => {
  return await prisma.buyer.findMany({
    take: props.limit,
    skip: props.offset,
    include: {
      profile: true,
      address: true,
    },
  });
};
