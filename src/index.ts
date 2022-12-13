import "dotenv/config";
import Express from "express";
import router from "./router";
import logger from "./helpers/logger";

const app = Express();
const SERVICE_PORT = process.env.SERVICE_PORT ?? 0;

app.use(Express.json({ limit: "8mb" }));
router(app);

app.listen(SERVICE_PORT, () => logger.verbose("Listening on port", SERVICE_PORT));
