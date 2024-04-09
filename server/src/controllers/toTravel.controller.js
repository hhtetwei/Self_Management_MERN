const toTravelServcie = require('../services/toTravel.services')

const toTravelController = {
  getAllTravel: async (req, res, next) => {
    try {
      const ret = await toTravelServcie.getAllTravel(req.query)

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  getTravel: async (req, res, next) => {
    try {
      const ret = await toTravelServcie.getTravel(req.params.id)

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  createTravel: async (req, res, next) => {
    try {
      const ret = await toTravelServcie.createToTravel(req.body)

      return res.status(201).json(ret)
    } catch (err) {
      next(err)
    }
  },

  editToTravel: async (req, res, next) => {
    try {
      const ret = await toTravelServcie.editToTravel({
        id: req.params.id,
        payload: req.body,
      })

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  deleteToTravel: async (req, res, next) => {
    try {
      const ret = await toTravelServcie.deleteToTravel(req.params.id)

      return res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = toTravelController
