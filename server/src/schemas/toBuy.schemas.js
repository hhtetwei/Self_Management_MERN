const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = Object.freeze({
  createToBuy: Joi.object({
    body: Joi.object({
      to_buy: Joi.string().required(),
      cost: Joi.string().required(),
    }),
  }),

  getAllToBuy: Joi.object({
    query: Joi.object({
      sort: Joi.string().default('-createdAt'),
      limit: Joi.string(),
      skip: Joi.string(),
      page: Joi.string(),
    }),
  }),

  getToBuy: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  editToBuy: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      to_buy: Joi.string(),
      cost: Joi.string(),
    }),
  }),

  deleteToBuy: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
