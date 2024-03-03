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
