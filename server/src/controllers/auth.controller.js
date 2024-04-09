const authService = require('../services/auth.services')

const authController = {
  signUp: async (req, res, next) => {
    try {
      const { user, token } = await authService.signUp(req.body, res)

      return res.status(201).json({ data: user, token: token })
    } catch (err) {
      next(err)
    }
  },

  login: async (req, res, next) => {
    try {
     
      const { user, jwtToken } = await authService.login(req.body)

      return res.status(200).json({ data: user, token: jwtToken })
    } catch (err) {
      next(err)
    }
  },
}

module.exports = authController
