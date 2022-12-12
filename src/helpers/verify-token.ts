import ServerResponse from "./server-response";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import logger from "./logger";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET ?? "";

const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["token"];
    if (
      !token ||
      typeof token !== "string" ||
      !jwt.verify(token, ACCESS_TOKEN_SECRET)
    ) return ServerResponse(res, 401, { error: "Invalid Token" });
    next();
  } catch (e) {
    ServerResponse(res, 500);
    logger.error("Exception in helper verify-token.ts", e);
  }
}

export default VerifyToken;
