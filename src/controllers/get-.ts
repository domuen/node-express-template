import { Request, Response } from "express";
import ServerResponse from "../helpers/server-response";
import logger from "../helpers/logger";

export default async (req: Request, res: Response) => {
  try {
    ServerResponse(res, 200);
  } catch (e) {
    ServerResponse(res, 500);
    logger.error("Exception in controller get-.ts:", e);
  }
}
