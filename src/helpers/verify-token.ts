import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import logger from "./logger";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET ?? "";

const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.token;
    if (!token || Array.isArray(token) || !jwt.verify(token, ACCESS_TOKEN_SECRET))
      return res.status(401).end();
    next();
  } catch (e) {
    res.status(500).end();
    logger.error("Exception in helper verify-token.ts", e);
  }
}

export default VerifyToken;
