import { NextFunction, Request, Response } from "express";

interface ControllerResponse {
  status: number;
  data?: any;
}

export default class Controller {
  // controller files will call this top function,
  // passing a callback which contains the controller code

  // the controller passed will return a 
  // status code and some data if applicable
  constructor(controller: (req: Request, res: Response, next: NextFunction) => Promise<ControllerResponse>) {
    // This curried function is what app.<method> will receive
    return (req: Request, res: Response, next: NextFunction) =>
      controller(req, res, next).then(response =>
        res.status(response.status).json(response.data).end());
  }
}
