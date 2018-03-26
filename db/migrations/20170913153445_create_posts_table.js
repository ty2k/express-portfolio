
exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.dateTime('time_created_at').notNull()
    table.dateTime('time_updated_at').nullable()
    table.string('title')
    table.string('slug')
    table.text('body')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}
