import * as z from "zod";

export const schemaError = z.object({
  code: z.string(),
  message: z.string(),
});
