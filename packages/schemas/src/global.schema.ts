import { z } from "zod";
import { apiBuilder } from "@zodios/core";

export const globalApi = apiBuilder({
  method: "get",
  path: "/",
  alias: "root",
  description: "API Health",
  response: z.object({
    message: z.string(),
  }),
})
  .addEndpoint({
    method: "get",
    path: "/health",
    alias: "health",
    description: "Health Check",
    response: z.object({
      message: z.string(),
      status: z.string(),
    }),
    status: 200,
  })
  .addEndpoint({
    method: "post",
    path: "/contact",
    alias: "contact",
    description: "Contact",
    response: z.any(),
    parameters: [
      {
        type: "Body",
        name: "body",
        schema: z.object({
          name: z.string(),
          email: z.string(),
          phone: z.string().nullish(),
          message: z.string(),
        }),
      },
    ],
    status: 200,
  })
  .addEndpoint({
    method: "post",
    path: "/waitlist",
    alias: "waitlist",
    description: "Waitlist",
    parameters: [
      {
        type: "Body",
        name: "body",
        schema: z.object({
          email: z.string(),
        }),
      },
    ],
    response: z.any(),
    status: 200,
  })
  .build();
