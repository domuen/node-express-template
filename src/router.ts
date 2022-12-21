import { Express } from "express";
import VerifyAPIKey from "./helpers/verify-api-key";
import logRequest from "./helpers/log-request";

import add from "./controllers/add-";
import edit from "./controllers/edit-";
import get from "./controllers/get-";
import remove from "./controllers/remove-";

const basepath = (route?: string): string => `/${route}`;

const router = (app: Express) => {
  app.use(logRequest);

  app.post(basepath(), VerifyAPIKey, add);
  app.patch(basepath("/:Id"), VerifyAPIKey, edit);
  app.get(basepath("/:Id"), VerifyAPIKey, get);
  app.delete(basepath("/:Id"), VerifyAPIKey, remove);
}

export default router;
