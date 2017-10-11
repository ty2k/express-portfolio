
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.integer('display_order');
    table.dateTime('time_created_at').notNull().defaultTo(knex.fn.now());
    table.dateTime('time_updated_at').nullable();
    table.string('name');
    table.string('slug');
    table.string('screenshot_url');
    table.json('tech_stack');
    table.string('github_url');
    table.string('github_caption');
    table.string('secondary_url');
    table.string('secondary_caption');
    table.string('deployment_url');
    table.string('deployment_caption');
    table.text('body');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
