const Router = require("koa-router");
const { getAll } = require("./controllers");
const router = new Router();

router
  .get("/events_list", (ctx) => (ctx.body = "Events List!"))
  .get("/helloworld", getAll);

module.exports = router;
