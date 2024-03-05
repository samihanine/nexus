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
        schema: profileSchema.omit({
          id: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        }),
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
    alias: "getProfileById",
    path: "/profiles/:profileId",
    description: "Get Profile",
    response: profileSchema,
    parameters: [
      {
        type: "Path",
        name: "profileId",
        schema: z.string(),
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
    method: "get",
    alias: "getProfiles",
    path: "/profiles",
    description: "Get Profiles",
    response: z.array(profileSchema),
    parameters: [],
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
    method: "get",
    alias: "getCurrentProfile",
    path: "/profiles/current",
    description: "Get Profiles",
    response: profileSchema,
    parameters: [],
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
        schema: z.string(),
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
