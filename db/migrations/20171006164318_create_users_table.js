
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email');
    table.unique('email');
    table.string('password');
    table.boolean('admin').notNullable().defaultTo(false);
    table.dateTime('time_created_at').notNullable().defaultTo(knex.fn.now());;
    table.dateTime('time_updated_at').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
