const { getAll } = require("./repository");

async function getService() {
  return await getAll();
}

module.exports = {
  getService,
};
