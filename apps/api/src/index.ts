import { zodiosApp } from "@zodios/express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { authRouter } from "./routes/auth.route";
import { healthRouter } from "./routes/health.route";
import { userRouter } from "./routes/user.route";
import { addressRouter } from "./routes/address.route";
import helmet from "helmet";
import hpp from "hpp";
import express from "express";
import { profileRouter } from "./routes/profile.route";
import { propertyRouter } from "./routes/property.route";

dotenv.config();

const server = zodiosApp();

server
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ limit: "50mb", extended: true }))
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .use(
    json({
      limit: "50mb",
    })
  )
  .use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      exposedHeaders: ["Content-Type", "Authorization"],
    })
  )
  .use(helmet())
  .use(hpp());

server.use(userRouter, healthRouter, authRouter, addressRouter, profileRouter, propertyRouter);

server.get("/", (_, res) => {
  res.json({
    message: "Welcome to nexus API",
  });
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Api running on ${port}`);
});
