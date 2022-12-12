import { Request } from "express";
import logger from "./logger";

export default (req: Request) => {
  console.log("");
  logger.verbose(`${req.method} to ${req.path}`);
  console.log("");
  req.next?.();
};
