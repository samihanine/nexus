import { z } from "zod";
import { apiBuilder } from "@zodios/core";

export const healthApi = apiBuilder({
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
  .build();
