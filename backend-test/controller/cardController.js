const db = require('../db/db')

class CardController {
    async getAllItems(req, res) {
        const items = await db.select().from('card')
        res.json(items)
    }

    // add item into client's card by ID from JSON, POST request
    async addItem(req, res) {
        // const client_id = req.params.id
        const {client_id, product_id} = req.body
        const newItem = await db.insert({
            client_id: client_id,
            product_id: product_id
        }).into('card')
        res.json('item was added')
    }

    // delete item from client's card by ID from JSON, DELETE request
    async deleteItem(req, res) {
        // const client_id = req.params.id
        const {client_id, product_id} = req.body
        const item = await db('card').del().where({
            client_id: client_id,
            product_id: product_id
        }).limit(1)
        res.json('item was deleted')
    }

    // get products of client by ID from params
    async getItemsByClient(req, res) {
        const clientId = req.params.id
        const items = await db('product')
            .select('name')
            .sum('price')
            .count('name')
            .from('card')
            .leftJoin('product', 'card.product_id', 'product.id')
            .where('client_id', '=', clientId)
            .groupBy('product.name')
        res.json(items)
        // select public.product.name, sum(public.product.price), count(public.product.name)
        // from public.card
        // left join public.product on public.card.product_id = public.product.id
        // where public.card.client_id = 3
        // group by public.product.name
    }

    // get sum of products price in each client's card
    async getClientsSum(req, res) {
        const items = await db('product')
            .select('card.client_id')
            .sum('product.price as sum_products_price')
            .from('card')
            .leftJoin('product', 'card.product_id', 'product.id')
            .groupBy('card.client_id')
            .orderBy('sum_products_price', 'desc')

        // get clients info and assign in items objects by ID of client
        const clients = await db.select().from('client')
        items.forEach(item => {
            clients.find((client, index) => {
                if (client.id === item.client_id) {
                    // delete client.id
                    Object.assign(item, client)
                }
            })
        })
        res.json(items)
        // select public.card.client_id,
        // sum(public.product.price) as product_price
        // from public.card
        // left join public.product on public.card.product_id = public.product.id
        // group by public.card.client_id
        // order by product_price desc;
    }

    // get count of products in each client's card
    async getProductsCount(req, res) {
        const items = await db('product')
            .select('card.client_id')
            .count('product.price as count_products')
            .from('card')
            .leftJoin('product', 'card.product_id', 'product.id')
            .groupBy('card.client_id')
            .orderBy('count_products', 'desc')

        // get clients info and assign in items objects by ID of client
        const clients = await db.select().from('client')
        items.forEach(item => {
            clients.find((client, index) => {
                if (client.id === item.client_id) {
                    // delete client.id
                    Object.assign(item, client)
                }
            })
        })
        res.json(items)
        // select public.card.client_id,
        // count(public.product.price)
        // from public.card
        // left join public.product on public.card.product_id = public.product.id
        // group by public.card.client_id
        // order by sum(public.product.price) desc;
    }
}

module.exports = new CardController()