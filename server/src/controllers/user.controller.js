const userService = require('../services/user.services')

const userController = {
  getUser: async (req, res, next) => {
    try {
      const user = await userService.getUser(req.params.id)

      return res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getUsers(req.query)

      res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await userService.updateUser({
        id: req.params.id,
        payload: req.body,
      })

      return res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = userController
