const mongoose = require('mongoose')

const toBuySchema = new mongoose.Schema(
  {
    to_buy: {
      type: String,
    },

    cost: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('toBuy', toBuySchema, 'toBuy')
