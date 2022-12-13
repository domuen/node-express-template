import { NextFunction, Request, Response } from "express";
import { logger, ServerResponse } from "../helpers";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    ServerResponse(res, 204);
  } catch (e) {
    ServerResponse(res, 500);
    logger.error("Exception in controller add-.ts:", e);
  }
}
