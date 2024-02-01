import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { tagApi } from "@nexus/schemas";
import {
  createTag,
  deleteTag,
  getTag,
  getTagsByWorkspaceId,
} from "../services/tag.service";

export const tagRouter = zodiosRouter(tagApi, {
  transform: true,
});

tagRouter.post("/tags", authMiddleware, async (request, response) => {
  try {
    const newTag = await createTag(request.body);

    response.status(201).json(newTag);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

tagRouter.get(
  "/workspaces/:workspaceId/tags",
  authMiddleware,
  async (request, response) => {
    try {
      const tags = await getTagsByWorkspaceId(request.params.workspaceId);

      response.json(tags);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

tagRouter.get("/tags/:tagId", authMiddleware, async (request, response) => {
  try {
    const tag = await getTag(request.params.tagId);

    if (!tag) {
      return response.status(404).json({
        message: "Tag not found",
        code: "ORGANIZATION_NOT_FOUND",
      });
    }

    response.json(tag);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

tagRouter.delete("/tags/:tagId", authMiddleware, async (request, response) => {
  try {
    await deleteTag(request.params.tagId);
    response.status(204).send();
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});
