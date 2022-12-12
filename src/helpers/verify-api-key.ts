import { Request, Response, NextFunction } from "express";
import ServerResponse from "./server-response";
import logger from "./logger";

const API_KEY = process.env.API_KEY ?? "";

const VerifyAPIKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = req.headers["api-key"];
    if (
      !apiKey ||
      typeof apiKey !== "string" ||
      apiKey !== API_KEY
    ) return ServerResponse(res, 401, { error: "Invalid API Key" });
    next();
  } catch (e) {
    ServerResponse(res, 500);
    logger.error("Exception in helper verify-api-key.ts", e);
  }
}

export default VerifyAPIKey;
