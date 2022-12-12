import { Express } from "express";
import VerifyAPIKey from "./helpers/verify-api-key";
import logRequest from "./helpers/log-request";

import add from "./controllers/add-";
import edit from "./controllers/edit-";
import get from "./controllers/get-";
import remove from "./controllers/remove-";

const basepath = "/chats";

const router = (app: Express) => {
  app.use(logRequest);

  app.post(`${basepath}/:threadId`, VerifyAPIKey, add);
  app.patch(`${basepath}/:chatId`, VerifyAPIKey, edit);
  app.get(`${basepath}/:threadId`, VerifyAPIKey, get);
  app.delete(`${basepath}/:chatId`, VerifyAPIKey, remove);
}

export default router;
