import { Controller, logger } from "../helpers";

export default Controller(async (req, res, next) => {
  try {
    return ({ status: 200 });
  } catch (e) {
    logger.error("Exception in controller get-.ts:", e);
    return ({ status: 500 });
  }
})
