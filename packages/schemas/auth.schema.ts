import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signInReponseSchema = z.object({
  accessToken: z.string(),
});

const googleResponseSchema = z.object({
  url: z.string(),
});

export const authApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/auth/signin",
    alias: "signIn",
    description: "Sign in",
    response: signInReponseSchema,
    parameters: [
      {
        name: "Credentials",
        type: "Body",
        schema: signInSchema,
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 400,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    path: "/auth/google",
    alias: "signInWithGoogle",
    description: "Google Auth",
    response: googleResponseSchema,
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    path: "/auth/google/callback",
    alias: "googleCallback",
    description: "Google OAuth Callback",
    response: z.string(),
    parameters: [
      {
        type: "Query",
        name: "code",
        schema: z.string(),
      },
      {
        type: "Query",
        name: "state",
        schema: z.string().optional(),
      },
      {
        type: "Query",
        name: "scope",
        schema: z.string(),
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
    method: "post",
    path: "/auth/signup",
    alias: "signUpWithPassword",
    description: "Sign up with password",
    parameters: [
      {
        type: "Body",
        name: "Credentials",
        schema: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z.string(),
        }),
      },
    ],
    response: signInReponseSchema,
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
      {
        status: 400,
        schema: schemaError,
      },
    ],
  })
  .build();
