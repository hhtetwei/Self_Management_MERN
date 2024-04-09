const Joi = require('joi')
Joi.objectid = require('joi-objectid')(Joi)

const schema = Object.freeze({
  GET_USERS: Joi.object({
    query: Joi.object({
      skip: Joi.number().integer().default(0),
      limit: Joi.number().integer().default(10),
      sort: Joi.any().default('-start'),
      search: Joi.string(),
    }),
  }),

  GET_USER: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),

  CREATE_USER: Joi.object({
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    }),
  }),

  EDIT_USER: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),

    body: Joi.object({
      email: Joi.string(),
      password: Joi.string(),
      name: Joi.string(),
    }),
  }),

  LOGIN: Joi.object({
    body: Joi.object({
      email: Joi.string().required().messages({
        'string.email': 'email is required',
      }),
      password: Joi.string().required().messages({
        'any.required': 'Password is required',
      }),
    }),
  }),

  DELETE_USER: Joi.object({
    params: Joi.object({
      id: Joi.objectid().required(),
    }),
  }),
})

module.exports = schema
