const { Router } = require('express')
const validate = require('../middlewares/validateSchema')
const toTravelController = require('../controllers/toTravel.controller')
const schema = require('../schemas/toTravel.schemas')

const router = Router()

router.get(
  '/',
  validate(schema.GET_ALL_TRAVEL),
  toTravelController.getAllTravel
)

router.get('/:id', validate(schema.GET_TRAVEL), toTravelController.getTravel)

router.post(
  '/',
  validate(schema.CREATE_TRAVEL),
  toTravelController.createTravel
)

router.patch(
  '/:id',
  validate(schema.EDIT_TRAVEL),
  toTravelController.editToTravel
)

router.delete(
  '/:id',
  validate(schema.DELETE_TRAVEL),
  toTravelController.deleteToTravel
)

module.exports = router
