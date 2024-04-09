const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    notes: {
      type: String,
    },

    // posted_by: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'users',
    // },
  },
  { timestamps: true },
)

module.exports = mongoose.model('notes', noteSchema, 'notes')
