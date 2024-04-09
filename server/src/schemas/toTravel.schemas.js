const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = Object.freeze({
  GET_ALL_TRAVEL: Joi.object({
    query: Joi.object({
      sort: Joi.string().default('-createdAt'),
      limit: Joi.string().default(10),
      skip: Joi.string(),
      page: Joi.string().default(1),
    }),
  }),

  GET_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  CREATE_TRAVEL: Joi.object({
    body: Joi.object({
      place: Joi.string().required(),
      priority: Joi.string().valid('high', 'low'),
      planned_year: Joi.string().max(new Date().getFullYear()).required(),
    }),
  }),

  EDIT_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      place: Joi.string(),
      priority: Joi.string().valid('high', 'low'),
      planned_year: Joi.string().max(new Date().getFullYear()),
    }),
  }),

  DELETE_TRAVEL: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
