const { USER_ERRORS } = require('../constants/errors.constants')
const userModel = require('../models/user.models')

const userService = {
  getUser: async (id) => {
    const user = await userModel.findById(id)

    if (!user) return USER_ERRORS.NOT_FOUND

    return user
  },

  getUsers: async (query) => {
    const { search, limit, skip } = query

    let filter = {}
    if (search) {
      const regex = new RegExp(search, 'i')
      filter.$or = [{ name: regex }]
    }
    const [data, count] = await Promise.all([
      userModel
        .find(filter)
        .skip(skip ? parseInt(skip) : 0)
        .limit(limit ? parseInt(limit) : 0)
        .lean(),
      userModel.find(filter).countDocuments(),
    ])

    return { data, count }
  },

  updateUser: async ({ id, payload }) => {
    const user = await userModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })

    if (!user) return USER_ERRORS.NOT_FOUND

    return user
  },
}

module.exports = userService
