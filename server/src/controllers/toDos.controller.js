const { TODO_ERRORS } = require('../constants/errors.constants')
const toDoService = require('../services/toDos.services')

const toDosController = {
  createToDos: async (req, res, next) => {
    try {
      const result = await toDoService.createToDos(req.body)
      return res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  },

  getToDo: async (req, res, next) => {
    try {
      const result = await toDoService.getToDo(req.params.id)
      if (!result) return TODO_ERRORS.NOT_FOUND

      return res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  getToDos: async (req, res, next) => {
    try {
      const result = await toDoService.getToDos(req.query)

      return res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  editToDo: async (req, res, next) => {
    try {
      const result = await toDoService.editToDo({
        id: req.params.id,
        payload: req.body,
      })

      return res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  },

  deleteToDo: async (req, res, next) => {
    try {
      const result = await toDoService.deleteToDo(req.params.id)

      return res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  },
}

module.exports = toDosController
