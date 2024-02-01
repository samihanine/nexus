import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { documentApi } from "@nexus/schemas";
import {
  deleteDocument,
  getDocument,
  getDocumentsByWorkspaceId,
  uploadDocuments,
  addTagToDocument,
  removeTagToDocument,
  getDocumentBase64,
} from "../services/document.service";
import multer from "multer";

export const documentRouter = zodiosRouter(documentApi, {
  transform: true,
});

const upload = multer({
  storage: multer.memoryStorage(),
});

documentRouter.post(
  "/documents/upload",
  authMiddleware,
  upload.any(),
  async (request, response) => {
    try {
      const data = request.body;
      if (!request.files || !request.files.length) {
        return response.status(400).json({
          message: "No files uploaded",
          code: "NO_FILES_UPLOADED",
        });
      }

      const documents = await uploadDocuments({
        ...data,
        userId: request.user.id,
        files: request.files as Express.Multer.File[],
      });

      response.status(201).json(documents);
    } catch (error) {
      console.log(error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.get(
  "/documents/:documentId",
  authMiddleware,
  async (request, response) => {
    try {
      const document = await getDocument(request.params.documentId);

      if (!document) {
        return response.status(404).json({
          message: "Document not found",
          code: "ORGANIZATION_NOT_FOUND",
        });
      }

      response.json(document);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.get(
  "/documents/:documentId/base64",
  authMiddleware,
  async (request, response) => {
    try {
      const base64 = await getDocumentBase64(request.params.documentId);

      response.send({ base64 });
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.post(
  "/documents/:documentId/tags/:tagId",
  authMiddleware,
  async (request, response) => {
    try {
      const document = await addTagToDocument({
        documentId: request.params.documentId,
        tagId: request.params.tagId,
      });

      response.json(document);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.delete(
  "/documents/:documentId/tags/:tagId",
  authMiddleware,
  async (request, response) => {
    try {
      const document = await removeTagToDocument({
        documentId: request.params.documentId,
        tagId: request.params.tagId,
      });

      response.json(document);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.get(
  "/workspaces/:workspaceId/documents",
  authMiddleware,
  async (request, response) => {
    try {
      const documents = await getDocumentsByWorkspaceId(
        request.params.workspaceId
      );

      response.json(documents);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

documentRouter.delete(
  "/documents/:documentId",
  authMiddleware,
  async (request, response) => {
    try {
      await deleteDocument(request.params.documentId);
      response.status(204).send();
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
