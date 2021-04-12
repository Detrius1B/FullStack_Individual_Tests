exports.up = function (knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.decimal('price')
        // table.timestamp(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('product')
};
