
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.dateTime('time_created_at').notNull();
    table.dateTime('time_updated_at').nullable();
    table.string('title');
    table.string('slug');
    table.text('body');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
