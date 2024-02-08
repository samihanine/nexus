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
