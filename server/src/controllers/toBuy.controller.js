const toBuyService = require('../services/toBuy.services')

const toBuyController = {
  createToBuy: async (req, res, next) => {
    try {
      const toBuy = await toBuyService.createToBuy(req.body)

      return res.status(201).json(toBuy)
    } catch (err) {
      next(err)
    }
  },

  getAllToBuy: async (req, res, next) => {
    try {
      const ret = await toBuyService.getAllToBuy(req.query)

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  getToBuy: async (req, res, next) => {
    try {
      const ret = await toBuyService.getToBuy(req.params.id)

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  editToBuy: async (req, res, next) => {
    try {
      const ret = await toBuyService.editToBuy({
        id: req.params.id,
        payload: req.body,
      })

      return res.status(200).json(ret)
    } catch (err) {
      next(err)
    }
  },

  deleteToBuy: async (req, res, next) => {
    try {
      const ret = await toBuyService.deleteToBuy(req.params.id)

      return res.status(204).json(ret)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = toBuyController
