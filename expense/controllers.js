const { getService } = require("./services");

async function getAll(ctx) {
  const expenses = await getService();
  ctx.body = expenses;
  ctx.status = 200;
}

module.exports = {
  getAll,
};
