import { uploadApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import multer from "multer";
import { authMiddleware } from "../middlewares/auth.middleware";
import { uploadImage } from "../services/upload.service";

export const uploadRouter = zodiosRouter(uploadApi, { transform: true });

const upload = multer({
  storage: multer.memoryStorage(),
});

uploadRouter.post(
  "/upload/image",
  upload.single("file"),
  authMiddleware,
  async (request, response) => {
    try {
      const file = request.file as Express.Multer.File;

      response
        .status(200)
        .json(await uploadImage({ file, folder: request.body.folder }));
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
