const knex = require('knex')
const knexfile = require('./knexfile')

// la prod datele de basa se vor lua din file'ul config
const db = knex(knexfile.development)

module.exports = db