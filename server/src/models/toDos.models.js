const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema(
  {
    to_do: {
      type: String,
    },

    important: {
      type: Boolean,
    },

    due_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('toDos', toDoSchema, 'todos')
