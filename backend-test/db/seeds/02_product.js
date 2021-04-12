exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('product').del()
        .then(function () {
            // Inserts seed entries
            return knex('product').insert([
                {name: 'Tea', price: '42'},
                {name: 'GameConsole', price: '14000'},
                {name: 'PC', price: '21000'},
                {name: 'Disc', price: '99'},
                {name: 'MaskMaybeIlon', price: '999999'}
            ]);
        });
};
