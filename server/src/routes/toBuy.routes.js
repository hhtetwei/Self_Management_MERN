const { Router } = require('express')
const validate = require('../middlewares/validateSchema')
const toBuyController = require('../controllers/toBuy.controller')
const schema = require('../schemas/toBuy.schemas')

const router = Router()

router.get('/', validate(schema.getAllToBuy), toBuyController.getAllToBuy)

router.get('/:id', validate(schema.getToBuy), toBuyController.getToBuy)

router.post('/', validate(schema.createToBuy), toBuyController.createToBuy)

router.patch('/:id', validate(schema.editToBuy), toBuyController.editToBuy)

router.delete('/:id', validate(schema.deleteToBuy), toBuyController.deleteToBuy)

module.exports = router
