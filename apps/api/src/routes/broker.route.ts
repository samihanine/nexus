import { brokerApi } from "@nexus/schemas";
import { zodiosRouter } from "@zodios/express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createBroker, updateBroker } from "../services/broker.service";

export const brokerRouter = zodiosRouter(brokerApi, { transform: true });

brokerRouter.post("/brokers", authMiddleware, async (request, response) => {
  try {
    const broker = await createBroker(request.body);

    if (!broker) {
      return response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }

    response.status(200).json(broker);
  } catch (error) {
    console.error("Error creating broker", error);
    response.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

brokerRouter.patch(
  "/brokers/:brokerId",
  authMiddleware,
  async (request, response) => {
    try {
      const broker = await updateBroker(request.params.brokerId, request.body);

      response.status(200).json(broker);
    } catch (error) {
      console.error("Error getting current broker", error);
      response.status(500).json({
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }
);
