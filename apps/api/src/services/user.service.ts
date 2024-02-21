import prisma from "../lib/prisma";

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
