import { zodiosRouter } from "@zodios/express";
import {
  signIn,
  authWithGoogleCallback,
  authWithGoogle,
  signUpWithPassword,
} from "../services/auth.service";
import { authApi } from "@nexus/schemas";

export const authRouter = zodiosRouter(authApi, { transform: true });

authRouter.post("/auth/signin", async (request, response) => {
  try {
    const result = await signIn(request.body);
    response.json(result);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

authRouter.get("/auth/google/callback", async (request, response) => {
  try {
    const redirectUrl = await authWithGoogleCallback({
      code: request.query.code,
      state: request.query.state,
      scope: request.query.scope,
    });

    response.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
    response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);
  }
});

authRouter.get("/auth/google", async (request, response) => {
  try {
    const url = await authWithGoogle();
    response.json({
      url,
    });
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

authRouter.post("/auth/signup", async (request, response) => {
  try {
    const result = await signUpWithPassword(request.body);
    response.json(result);
  } catch (error) {
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});
