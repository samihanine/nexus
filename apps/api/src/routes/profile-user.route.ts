import { profileUserApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createProfileUser,
  getProfileUserById,
} from "../services/profile-user.service";

export const profileUserRouter = zodiosRouter(profileUserApi, {
  transform: true,
});

profileUserRouter.post(
  "/profile-users",
  authMiddleware,
  async (request, response) => {
    try {
      const profile = await createProfileUser({
        ...request.body,
      } as any);

      if (!profile) {
        throw new Error("Error creating profile");
      }

      await createProfileUser({
        userId: request.user.id,
        profileId: profile.id,
      });

      response.status(200).json(profile);
    } catch (error) {
      console.error("Error creating profile", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);

profileUserRouter.get(
  "/profile-users/:profileUserId",
  authMiddleware,
  async (request, response) => {
    try {
      const profileUser = await getProfileUserById(
        request.params.profileUserId
      );
      if (!profileUser) {
        return response.status(404).json({
          message: "Profile not found",
          code: "PROFILE_NOT_FOUND",
        });
      }

      response.status(200).json(profileUser);
    } catch (error) {
      console.error("Error getting current profile", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
