exports.up = function (knex) {
  return knex.schema.createTable("expense", function (table) {
    table.increments("id");
    table.string("description", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("expense");
};

exports.config = { transaction: false };
