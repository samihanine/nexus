import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const createBroker = async (props: Prisma.BrokerCreateManyInput) => {
  await prisma.broker.createMany({
    data: [
      {
        ...props,
      },
    ],
  });

  return await prisma.broker.findFirst({
    where: {
      profileId: props.profileId,
    },
  });
};

export const updateBroker = async (
  id: string,
  data: Prisma.BrokerUpdateInput
) => {
  return await prisma.broker.update({
    data: {
      ...data,
    },
    where: {
      id,
    },
  });
};
