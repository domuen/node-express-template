import { Controller, logger } from "../helpers";

export default Controller(async (req, res, next) => {
  try {
    return ({ status: 204 });
  } catch (e) {
    logger.error("Exception in controller add-.ts:", e);
    return ({ status: 500 });
  }
});
