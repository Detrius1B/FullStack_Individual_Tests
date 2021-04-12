const db = require('../db/db')

class ClientController {
    async getAllClients(req, res) {
        const clients = await db.select().from('client')
        res.json(clients)
    }

    // create client from json POST request
    async createClients(req, res) {
        const {name, surname} = req.body
        const newClient = await db.insert({
            name: name,
            surname: surname
        }).into('client')
        res.json(newClient.rows)
    }

    // get client by ID
    async getClient(req, res) {
        const id = req.params.id
        const client = await db.select().from('client')
            .where('id', '=', id)
        res.json(client)
    }
}

module.exports = new ClientController()