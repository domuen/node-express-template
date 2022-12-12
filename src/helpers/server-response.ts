import { Response } from "express";

const ServerResponse = (
  res: Response,
  status: number,
  body?: any
) => res.status(status).json(body).end();

export default ServerResponse;
