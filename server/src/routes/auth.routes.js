const { Router } = require('express')
const authController = require('../controllers/auth.controller')
const validate = require('../middlewares/validateSchema')
const schema = require('../schemas/user.schemas')
// const authSchema = require('../schemas/auth.schemas')

const router = Router()

router.post(
  '/email/signup',
  validate(schema.CREATE_USER),
  authController.signUp
)

router.post('/email/login', validate(schema.LOGIN), authController.login)

module.exports = router
