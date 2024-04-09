const { TOTRAVEL_ERRORS } = require('../constants/errors.constants')
const toTravelModel = require('../models/toTravel.models')

const toTravelServcie = {
  getAllTravel: async ({ limit, skip, sort }) => {
    let filter = {}

    const [data, count] = await Promise.all([
      toTravelModel.find(filter).limit(+limit).skip(+skip).sort(sort),
      toTravelModel.find(filter).countDocuments(),
    ])

    return { data, count }
  },

  getTravel: async (id) => {
    const ret = await toTravelModel.findById(id)

    if (!ret) return TOTRAVEL_ERRORS.NOT_FOUND
    return ret
  },

  createToTravel: async (payload) => {
    const ret = await toTravelModel.create(payload)

    return ret
  },

  editToTravel: async ({ id, payload }) => {
    const ret = await toTravelModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })

    return ret
  },

  deleteToTravel: async (id) => {
    const ret = await toTravelModel.findByIdAndDelete(id)

    if (!ret) return TOTRAVEL_ERRORS.NOT_FOUND

    return ret
  },
}
module.exports = toTravelServcie
