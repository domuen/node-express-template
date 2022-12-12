import "dotenv/config";
import Express from "express";
import router from "./router";
import "./schemas/user-schema";
import logger from "./helpers/logger";

const app = Express();
const { SERVICE_PORT } = process.env;

app.use(Express.json({ limit: "20mb" }));
router(app);

app.listen(SERVICE_PORT ?? 0, () => logger.verbose("Listening on port", SERVICE_PORT));
