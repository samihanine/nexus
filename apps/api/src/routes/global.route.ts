import { zodiosRouter } from "@zodios/express";
import { globalApi } from "@nexus/schemas";

export const globalRouter = zodiosRouter(globalApi);

globalRouter.get("/health", async (_, response, next) => {
  try {
    response.status(200).json({
      message: "The Nexus API is healthy.",
      status: "globaly",
    });
  } catch (error) {
    next(error);
  }
});
