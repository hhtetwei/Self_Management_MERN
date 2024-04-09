const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = Object.freeze({
  GET_NOTES: Joi.object({
    query: Joi.object({
      sort: Joi.any().default('-createdAt'),
      limit: Joi.string(),
    }),
  }),

  GET_NOTE: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  CREATE_NOTE: Joi.object({
    body: Joi.object({
      title: Joi.string(),
      notes: Joi.string(),
    }),
  }),

  UPDATE_NOTE: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      title: Joi.string(),
      notes: Joi.string(),
    }),
  }),

  DELETE_NOTE: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
