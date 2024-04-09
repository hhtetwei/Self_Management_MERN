const { TOBUY_ERRORS } = require('../constants/errors.constants')
const toBuyModel = require('../models/toBuy.models')

const toBuyService = {
  createToBuy: async (payload) => {
    const ret = await toBuyModel.create(payload)

    return ret
  },

  getAllToBuy: async (query) => {
    const { sort } = query
    let filter = {}

    const page = query.page * 1 || 1
    const limit = query.page === 0 ? query.limit : query.limit * 1 || 10
    const skip = (page - 1) * limit

    const [data, count] = await Promise.all([
      toBuyModel.find(filter).skip(+skip).sort(sort).limit(+limit),
      toBuyModel.find(filter).countDocuments(),
    ])
    return { data, count }
  },

  getToBuy: async (id) => {
    const ret = await toBuyModel.findById(id)

    if (!ret) return TOBUY_ERRORS.NOT_FOUND

    return ret
  },

  editToBuy: async ({ id, payload }) => {
    const toBuy = await toBuyModel.findById(id)

    if (!toBuy) return TOBUY_ERRORS.NOT_FOUND

    const ret = await toBuyModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })

    return ret
  },

  deleteToBuy: async (id) => {
    const ret = await toBuyModel.findByIdAndDelete(id)
    if (!ret) return TOBUY_ERRORS.NOT_FOUND
    return ret
  },
}

module.exports = toBuyService
