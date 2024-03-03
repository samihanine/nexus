import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createSeller = async (props: Prisma.SellerCreateManyInput) => {
  return await prisma.seller.create({
    data: {
      ...props,
    },
  });
};

export const updateSeller = async (
  id: string,
  data: Prisma.SellerUpdateInput
) => {
  return await prisma.seller.update({
    data: {
      ...data,
    },
    where: {
      id,
    },
  });
};
