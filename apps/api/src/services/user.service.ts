import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const createUser = async (newUser: {
  name: string;
  email: string;
  imageUrl?: string;
  provider: string;
  password?: string;
}) => {
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      imageUrl: newUser.imageUrl,
      provider: newUser.provider,
      password: newUser.password,
    },
  });

  return user;
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const updateUser = async (id: string, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data,
  });
};
