module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            database: 'backend_test',
            user: 'postgres',
            password: 'root'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
