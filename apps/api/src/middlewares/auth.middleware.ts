import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"];
  const token = authorization?.split(" ")[1];

  if (!token)
    return res.status(403).send({ message: "No token provided.", status: 403 });

  jwt.verify(token, process.env.SECRET_KEY as string, async (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Failed to authenticate.", status: 403 });

    decoded = decoded as { userId: string };

    if (!decoded?.userId)
      return res
        .status(500)
        .send({ message: "Failed to authenticate.", status: 403 });

    const user = await prisma.user.findUnique({
      where: { id: decoded?.userId },
    });

    (req as any).user = user;

    next();
  });
};
