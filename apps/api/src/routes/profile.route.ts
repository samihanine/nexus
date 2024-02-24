import { zodiosRouter } from "@zodios/express";
import { profileApi } from "@nexus/schemas";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createProfile,
  updateProfile,
  getProfileById,
  getProfilesByUserId,
  getCurrentProfile,
} from "../services/profile.service";
import express from "express";
import { createProfileUser } from "../services/profile-user.service";
import { updateUser } from "../services/user.service";

export const profileRouter = zodiosRouter(profileApi, { transform: true });

profileRouter.post("/profiles", authMiddleware, async (request, response) => {
  try {
    const profile = await createProfile({
      ...request.body,
    } as any);

    if (!profile) {
      throw new Error("Error creating profile");
    }

    await createProfileUser({
      userId: request.user.id,
      profileId: profile.id,
    });

    await updateUser(request.user.id, {
      currentProfileId: profile.id,
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

profileRouter.get(
  "/profiles/current",
  authMiddleware,
  async (request, response) => {
    try {
      const profile = await getCurrentProfile(request.user.id);

      if (!profile) {
        return response.status(404).json({
          message: "Profile not found",
          code: "PROFILE_NOT_FOUND",
        });
      }

      response.status(200).json(profile);
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

profileRouter.get(
  "/profiles/:profileId",
  authMiddleware,
  async (request, response) => {
    try {
      const profile = await getProfileById(request.params.profileId);

      if (!profile) {
        return response.status(404).json({
          message: "Profile not found",
          code: "PROFILE_NOT_FOUND",
        });
      }

      response.status(200).json(profile);
    } catch (error) {
      console.error("Error getting current profile", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

profileRouter.get("/profiles", authMiddleware, async (request, response) => {
  try {
    const profiles = await getProfilesByUserId(request.user.id);
    response.status(200).json(profiles);
  } catch (error) {
    console.error("Error getting current profile", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});
