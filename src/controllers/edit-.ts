import { Controller, logger } from "../helpers";

export default new Controller(async (req, res, next) => {
  try {
    return ({ status: 204 });
  } catch (e) {
    logger.error("Exception in controller edit-.ts:", e);
    return ({ status: 500 });
  }
})
