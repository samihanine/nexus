import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";
import { ProfileType } from "@prisma/client";

export const profileSchema = z.object({
  id: z.string().uuid(),
  type: z.nativeEnum(ProfileType),
  firstName: z.string(),
  lastName: z.string(),
  imageUrl: z.string().nullish(),
  broker: z
    .object({
      id: z.string().uuid().nullish(),
      phone: z.string(),
      email: z.string(),
      description: z.string(),
      centrisUrl: z.string(),
      websiteUrl: z.string().nullish(),
      oaciqNumber: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      radius: z.number(),
      agencyId: z.string().uuid().nullish(),
      createdAt: z.string().or(z.date()).nullish(),
      updatedAt: z.string().or(z.date()).nullish(),
      deletedAt: z.string().or(z.date()).nullish(),
      agency: z
        .object({
          id: z.string().uuid().nullish(),
          name: z.string(),
          phone: z.string(),
          email: z.string(),
          websiteUrl: z.string().nullish(),
          createdAt: z.string().or(z.date()).nullish(),
          updatedAt: z.string().or(z.date()).nullish(),
          deletedAt: z.string().or(z.date()).nullish(),
        })
        .nullish(),
    })
    .nullish(),

  owner: z
    .object({
      id: z.string().uuid().nullish(),
      createdAt: z.string().or(z.date()).nullish(),
      updatedAt: z.string().or(z.date()).nullish(),
      deletedAt: z.string().or(z.date()).nullish(),
    })
    .nullish(),

  seller: z
    .object({
      id: z.string().uuid().nullish(),
      sellingPeriod: z.string(),
      createdAt: z.string().or(z.date()).nullish(),
      updatedAt: z.string().or(z.date()).nullish(),
      deletedAt: z.string().or(z.date()).nullish(),
    })
    .nullish(),

  buyer: z
    .object({
      id: z.string().uuid().nullish(),
      minimumPrice: z.number(),
      maximumPrice: z.number(),
      buyingPeriod: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      radius: z.number(),
      propertyTypes: z.array(z.string()),
      createdAt: z.string().or(z.date()).nullish(),
      updatedAt: z.string().or(z.date()).nullish(),
      deletedAt: z.string().or(z.date()).nullish(),
    })
    .nullish(),

  tenant: z
    .object({
      id: z.string().uuid().nullish(),
      minimumPrice: z.number(),
      maximumPrice: z.number(),
      buyingPeriod: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      radius: z.number(),
      imageUrl: z.string().nullish(),
      createdAt: z.string().or(z.date()).nullish(),
      updatedAt: z.string().or(z.date()).nullish(),
      deletedAt: z.string().or(z.date()).nullish(),
    })
    .nullish(),

  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
});

export type Profile = z.infer<typeof profileSchema>;

export const profileApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/profiles",
    alias: "createProfile",
    description: "Create profile",
    response: profileSchema,
    status: 201,
    parameters: [
      {
        name: "New Profile",
        type: "Body",
        schema: profileSchema.omit({ id: true, userId: true, createdAt: true, updatedAt: true, deletedAt: true }),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    alias: "getProfile",
    path: "/profiles/:profileId",
    description: "Get Profile",
    response: profileSchema,
    parameters: [
      {
        type: "Path",
        name: "profileId",
        schema: z.number(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "patch",
    path: "/profiles/:profileId",
    alias: "updateProfile",
    description: "Update Profile",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "profileId",
        schema: z.string(),
      },
      {
        type: "Body",
        name: "profile",
        schema: profileSchema.partial(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "delete",
    path: "/profiles/:profileId",
    description: "Delete Profile",
    status: 204,
    alias: "deleteProfile",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "profileId",
        schema: z.number(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 404,
        schema: schemaError,
      },
    ],
  })
  .build();
