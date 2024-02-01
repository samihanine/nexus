import { z } from "zod";
import { apiBuilder } from "@zodios/core";
import { schemaError } from "./helpers";

const documentSchema = z.object({
  id: z.string(),
  workspaceId: z.string(),
  name: z.string(),
  mimeType: z.string(),
  fileUrl: z.string(),
  createdAt: z.any(),
  updatedAt: z.any(),
  deletedAt: z.any().nullish(),
  month: z.string(),
  year: z.string(),
  googleDriveFolderId: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  documentTags: z
    .array(
      z.object({
        id: z.string(),
        documentId: z.string(),
        tagId: z.string(),
      })
    )
    .nullish(),
  user: z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      imageUrl: z.string().nullish(),
    })
    .nullish(),
});

export type Document = z.infer<typeof documentSchema>;

export const documentApi = apiBuilder()
  .addEndpoint({
    method: "get",
    path: "/documents/:documentId",
    alias: "getDocumentById",
    description: "Get Document by ID",
    response: documentSchema,
    parameters: [
      {
        type: "Path",
        name: "documentId",
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
    path: "/documents/:documentId/base64",
    alias: "getDocumentBase64ById",
    description: "Get Document Base64 by ID",
    response: z.object({
      base64: z.string(),
    }),
    parameters: [
      {
        type: "Path",
        name: "documentId",
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
    method: "post",
    path: "/documents/:documentId/tags/:tagId",
    alias: "addTagToDocument",
    description: "Add Tag to Document",
    response: documentSchema,
    status: 201,
    parameters: [
      {
        type: "Path",
        name: "documentId",
        schema: z.string(),
      },
      {
        type: "Path",
        name: "tagId",
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
    method: "delete",
    path: "/documents/:documentId/tags/:tagId",
    alias: "removeTagToDocument",
    description: "Remove Tag to Document",
    response: documentSchema,
    status: 201,
    parameters: [
      {
        type: "Path",
        name: "documentId",
        schema: z.string(),
      },
      {
        type: "Path",
        name: "tagId",
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
    path: "/documents/upload",
    alias: "uploadDocuments",
    description: "Upload Documents",
    response: z.array(documentSchema),
    parameters: [
      {
        type: "Body",
        name: "Document Data",
        schema: z.any(),
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
      {
        status: 400,
        schema: schemaError,
      },
    ],
  })
  .addEndpoint({
    method: "get",
    path: "/workspaces/:workspaceId/documents",
    alias: "getDocumentsByWorkspaceId",
    description: "Get Companies by Workspace ID",
    response: z.array(documentSchema),
    parameters: [
      {
        type: "Path",
        name: "workspaceId",
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
    path: "/documents",
    alias: "createDocument",
    description: "Create a Document",
    response: documentSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Document Data",
        schema: z.object({
          name: z.string(),
          workspaceId: z.string(),
          mimeType: z.string(),
          contentUrl: z.string(),
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
    method: "patch",
    path: "/documents/:documentId",
    alias: "updateDocument",
    description: "Update a Document",
    response: documentSchema,
    status: 201,
    parameters: [
      {
        type: "Body",
        name: "Document Data",
        schema: documentSchema.partial(),
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
    method: "delete",
    path: "/documents/:documentId",
    alias: "deleteDocument",
    description: "Delete a Document",
    response: documentSchema,
    status: 201,
    parameters: [
      {
        type: "Path",
        name: "documentId",
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
  .build();
