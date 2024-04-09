const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },

    name: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  //if password is not modified,will hash and if not go to next middleware
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.comparePassword = async function (
  userInputPassword,
  realPassword
) {
  const isPasswordMatch = await bcrypt.compare(userInputPassword, realPassword)

  return isPasswordMatch
}

module.exports = new mongoose.model('users', userSchema, 'users')
