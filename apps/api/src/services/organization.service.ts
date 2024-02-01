import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export const getOrganizationsByUserId = async (userId: string) => {
  return await prisma.organization.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
      deletedAt: null,
    },
  });
};

export const createOrganization = async (organization: any) => {
  return await prisma.organization.create({
    data: organization,
  });
};

export const getOrganization = async (organizationId: string) => {
  return await prisma.organization.findFirst({
    where: {
      id: organizationId,
      deletedAt: null,
    },
  });
};

export const deleteOrganization = async (organizationId: string) => {
  return await prisma.organization.update({
    where: {
      id: organizationId,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};

export const getOrganizations = async () => {
  return await prisma.organization.findMany();
};

export const updateOrganization = async (
  props: Prisma.OrganizationUpdateInput
) => {
  return await prisma.organization.update({
    where: {
      id: props.id as string,
    },
    data: props,
  });
};
