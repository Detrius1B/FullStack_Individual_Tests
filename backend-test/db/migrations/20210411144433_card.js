exports.up = function (knex) {
    return knex.schema.createTable('card', table => {
        table.integer('client_id')
            .notNullable()
            .references('id')
            .inTable('client')
            .onDelete('CASCADE')
            .index()
        table.integer('product_id')
            .notNullable()
            .references('id')
            .inTable('product')
            .onDelete('CASCADE')
            .index()
        // table.timestamp(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('card')
};
