const express = require('express')
const router = express.Router()
const cardController = require('../controller/cardController')

router.get('/card/all', cardController.getAllItems)
router.post('/card', cardController.addItem)
router.delete('/card', cardController.deleteItem)
router.get('/card/:id', cardController.getItemsByClient)
router.get('/cards/sum', cardController.getClientsSum)
router.get('/cards/count', cardController.getProductsCount)

module.exports = router