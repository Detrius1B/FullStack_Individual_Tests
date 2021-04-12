exports.up = function (knex) {
    return knex.schema.createTable('client', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('surname').notNullable()
        // table.timestamp(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('client')
};
