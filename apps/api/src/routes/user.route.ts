import { zodiosRouter } from "@zodios/express";
import { userApi } from "@nexus/schemas";
import { authMiddleware } from "../middlewares/auth.middleware";
import { updateUser } from "../services/user.service";

export const userRouter = zodiosRouter(userApi, { transform: true });

userRouter.get("/users/current", authMiddleware, async (request, response) => {
  try {
    response.status(200).json(request.user);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

userRouter.patch(
  "/users/:userId",
  authMiddleware,
  async (request, response) => {
    try {
      response
        .status(201)
        .json(await updateUser(request.params.userId, request.body));
    } catch (error) {
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
