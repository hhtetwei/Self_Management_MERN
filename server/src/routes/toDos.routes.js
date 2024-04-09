const { Router } = require('express')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/toDos.schemas')
const toDosController = require('../controllers/toDos.controller')
const authenticate = require('../middlewares/authenticate')

const router = Router()

router.get('/', validate(schema.GET_ALL_TODO), toDosController.getToDos)
router.get(
  '/:id',
  authenticate,
  validate(schema.GET_TODO),
  toDosController.getToDo,
)
router.post('/', validate(schema.CREATE_TODO), toDosController.createToDos)
router.patch(
  '/:id',
  authenticate,
  validate(schema.EDIT_TODO),
  toDosController.editToDo,
)
router.delete('/:id', validate(schema.DELETE_TODO), toDosController.deleteToDo)

module.exports = router
