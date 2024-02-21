import { zodiosRouter } from "@zodios/express";
import { globalApi } from "@nexus/schemas";
import axios from "axios";
import prisma from "../lib/prisma";

export const globalRouter = zodiosRouter(globalApi);

globalRouter.get("/health", async (_, response, next) => {
  try {
    response.status(200).json({
      message: "The Nexus API is healthy.",
      status: "200",
    });
  } catch (error) {
    next(error);
  }
});

globalRouter.post("/contact", async (request, response, next) => {
  try {
    const { name, email, phone, message } = request.body;

    await axios.post(process.env.DISCORD_WEBHOOK_URL || "", {
      content: `-----------------------------\n\nNew message from the website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n"""\n${message}\n"""\n\n@everyone\n\n-----------------------------`,
    });

    response.status(200).json({
      message: "Contact form submitted.",
    });
  } catch (error) {
    next(error);
  }
});

globalRouter.post("/waitlist", async (request, response, next) => {
  try {
    const existingWaitlist = await prisma.waitlist.findFirst({
      where: {
        email: request.body.email,
      },
    });

    if (!!existingWaitlist) {
      await prisma.waitlist.create({
        data: {
          email: request.body.email,
          type: request.body.type,
        },
      });
    }

    response.status(200).json({
      message: "Added to waitlist.",
    });
  } catch (error) {
    next(error);
  }
});
