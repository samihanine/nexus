import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "@nexus/utils";

export const uploadApi = apiBuilder()
  .addEndpoint({
    method: "post",
    path: "/upload/image",
    alias: "uploadImage",
    description: "Upload image",
    response: z.object({
      fileUrl: z.string(),
    }),
    status: 201,
    parameters: [
      {
        name: "Image",
        type: "Body",
        schema: z.any(),
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
    path: "/upload/files",
    alias: "uploadFile",
    description: "Upload files",
    response: z.object({
      fileUrl: z.string(),
    }),
    status: 201,
    parameters: [
      {
        name: "File",
        type: "Body",
        schema: z.any(),
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
    path: "/upload/videos",
    alias: "uploadVideos",
    description: "Upload videos",
    response: z.object({
      fileUrl: z.string(),
    }),
    status: 201,
    parameters: [
      {
        name: "Video",
        type: "Body",
        schema: z.any(),
      },
    ],
    errors: [
      {
        status: 500,
        schema: schemaError,
      },
    ],
  })
  .build();
