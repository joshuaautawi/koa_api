const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const expenseRoutes = require("./expense/routes");
const App = new Koa();
const port = 8000;
// logger

App.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

App.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

App.use(parser())
  .use(cors())
  .use(expenseRoutes.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });
