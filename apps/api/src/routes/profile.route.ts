import { zodiosRouter } from "@zodios/express";
import { profileApi } from "@nexus/schemas";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createProfile, updateProfile } from "../services/profile.service";
import express from "express";

export const profileRouter = zodiosRouter(profileApi, { transform: true });

profileRouter.post("/profiles", authMiddleware, async (request, response) => {
  try {
    const profile = await createProfile({
      ...request.body,
    });
    response.status(200).json(profile);
  } catch (error) {
    console.error("Error creating profile", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

profileRouter.patch(
  "/profiles/:profileId",
  express.json({ limit: "50mb" }),
  authMiddleware,
  async (request, response) => {
    try {
      response
        .status(200)
        // @ts-ignore
        .json(await updateProfile(request.params.profileId, request.body));
    } catch (error) {
      console.error("Error getting current profile", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
