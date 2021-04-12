const db = require('../db/db')

class ProductController {
    async getAllProducts(req, res) {
        const products = await db.select().from('product')
        res.json(products)
    }

    // create product from json POST request
    async createProducts(req, res) {
        const {name, price} = req.body
        const newProduct = await db.insert({
            name: name,
            price: price
        }).into('product')
        res.json(newProduct.rows)
    }

    // get product by ID
    async getProduct(req, res) {
        const id = req.params.id
        const product = await db.select().from('product')
            .where('id', '=', id)
        res.json(product)
    }

    // get all products with limit and offset from json
    async getAllProductsLimit(req, res) {
        const {limit, offset} = req.body
        const products = await db.select().from('product')
            .limit(limit)
            .offset(offset)
        res.json(products)
    }
}

module.exports = new ProductController()