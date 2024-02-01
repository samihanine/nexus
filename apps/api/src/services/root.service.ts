import prisma from "../lib/prisma";

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = async ({
  name,
  email,
  imageUrl,
  organizationId,
}: {
  name: string;
  email: string;
  imageUrl?: string | null;
  organizationId: string;
}) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      imageUrl,
      organizationId,
    },
  });
};
