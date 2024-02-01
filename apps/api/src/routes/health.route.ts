import { zodiosRouter } from "@zodios/express";
import { healthApi } from "@nexus/schemas";

export const healthRouter = zodiosRouter(healthApi);

healthRouter.get("/health", async (_, response, next) => {
  try {
    response.status(200).json({
      message: "The nexus API is healthy.",
      status: "healthy",
    });
  } catch (error) {
    next(error);
  }
});
