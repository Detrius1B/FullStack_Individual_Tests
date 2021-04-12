const express = require('express')
const router = express.Router()
const clientController = require('../controller/clientController')

router.get('/clients', clientController.getAllClients)
router.post('/client', clientController.createClients)
router.get('/client/:id', clientController.getClient)

module.exports = router