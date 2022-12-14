import { Request, Response, NextFunction } from "express";
import logger from "./logger";

const API_KEY = process.env.API_KEY ?? "";

const VerifyAPIKey = (req: Request, res: Response, next: NextFunction) => {
  try {
    const apiKey = req.headers["api-key"];
    if (!apiKey || apiKey !== API_KEY)
      return res.status(401).end();
    next();
  } catch (e) {
    res.status(500).end();
    logger.error("Exception in helper verify-api-key.ts", e);
  }
}

export default VerifyAPIKey;
