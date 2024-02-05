import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const createUser = async (newUser: Prisma.UserCreateManyInput) => {
  const user = await prisma.user.create({
    data: newUser,
  });

  return user;
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};
