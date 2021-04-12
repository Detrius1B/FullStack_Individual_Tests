exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('client').del()
        .then(function () {
            // Inserts seed entries
            return knex('client').insert([
                {name: 'Ivor', surname: 'Boneless'},
                {name: 'Ubba', surname: 'Lothbrok'},
                {name: 'Khal', surname: 'Drogo'}
            ]);
        });
};
