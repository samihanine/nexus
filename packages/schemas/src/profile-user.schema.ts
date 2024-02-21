import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const profileUserSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  userId: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullish(),
});

export type ProfileUser = z.infer<typeof profileUserSchema>;

export const profileUserApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/profile-users",
    alias: "createProfileUser",
    description: "Create profile user",
    response: profileUserSchema,
    status: 201,
    parameters: [
      {
        name: "New User",
        type: "Body",
        schema: profileUserSchema,
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
    alias: "getProfileUser",
    path: "/profile-users/:userId",
    description: "Get Profile User",
    response: profileUserSchema,
    parameters: [
      {
        type: "Path",
        name: "userId",
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
    path: "/profile-users/:userId",
    alias: "updateProfileUser",
    description: "Update Profile User",
    status: 204,
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "userId",
        schema: z.number(),
      },
      {
        type: "Body",
        name: "user",
        schema: profileUserSchema.partial(),
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
    path: "/profile-users/:userId",
    description: "Delete Profile User",
    status: 204,
    alias: "deleteProfileUser",
    response: z.object({}),
    parameters: [
      {
        type: "Path",
        name: "userId",
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
