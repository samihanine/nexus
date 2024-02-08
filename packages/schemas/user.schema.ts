import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";
import { profileSchema } from "./profile.schema";
import { UserPrivilege } from "@prisma/client";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string().nullish(),
  imageUrl: z.string().nullish(),
  privilege: z.nativeEnum(UserPrivilege).default("USER"),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
  profile: profileSchema.nullish(),
  profileId: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const userApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/users/current",
    alias: "getCurrentUser",
    description: "Get current user",
    response: userSchema,
    status: 200,
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
    method: "post",
    path: "/users",
    alias: "createUser",
    description: "Create user",
    response: userSchema,
    status: 201,
    parameters: [
      {
        name: "New User",
        type: "Body",
        schema: userSchema,
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
    alias: "getUser",
    path: "/users/:userId",
    description: "Get User",
    response: userSchema,
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
    path: "/users/:userId",
    alias: "updateUser",
    description: "Update User",
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
        schema: userSchema.partial(),
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
    path: "/users/:userId",
    description: "Delete User",
    status: 204,
    alias: "deleteUser",
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
