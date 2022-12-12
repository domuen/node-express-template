import { Request, Response, NextFunction } from "express";
import ServerResponse from "../helpers/server-response";
import logger from "../helpers/logger";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    ServerResponse(res, 204);
  } catch (e) {
    ServerResponse(res, 500);
    logger.error("Exception in controller edit-.ts:", e);
  }
}
