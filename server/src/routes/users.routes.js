const { Router } = require('express')
const validate = require('../middlewares/validateSchema')
const userController = require('../controllers/user.controller')
const schema = require('../schemas/user.schemas')

const router = Router()

router.get('/', validate(schema.GET_USERS), userController.getUsers)

module.exports = router
