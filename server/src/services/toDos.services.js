const { TODO_ERRORS } = require('../constants/errors.constants')
const toDosModel = require('../models/toDos.models')

const toDoService = {
  createToDos: async (payload) => {
    const toDo = await toDosModel.create(payload)

    return toDo
  },

  getToDos: async (query) => {
    const { sort } = query

    let filter = {}

    const page = query.page * 1 || 1
    const limit = query.limit === 0 ? query.limit : 0
    const skip = (page - 1) * limit

    const [data, count] = await Promise.all([
      toDosModel.find(filter).limit(+limit).skip(+skip).sort(sort),
      toDosModel.find(filter).countDocuments(),
    ])

    return { data, count }
  },

  getToDo: async (id) => {
    const todo = await toDosModel.findById(id)

    return todo
  },

  editToDo: async ({ id, payload }) => {
    const todo = await toDosModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    })
    return todo
  },

  deleteToDo: async (id) => {
    const todo = await toDosModel.findById(id)

    if (!todo) return TODO_ERRORS.NOT_FOUND

    const result = await toDosModel.findByIdAndDelete(todo)

    return result
  },
}

module.exports = toDoService
