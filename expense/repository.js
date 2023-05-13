const environment = process.env.NODE_ENV || "development";
let config = require("../knexfile")[environment];
const knex = require("knex")(config);

async function getAll() {
  const x = await knex("expense").select("*");
  return x;
}

module.exports = {
  getAll,
};
