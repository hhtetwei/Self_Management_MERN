const { sendToken } = require('../../utils/sendToken')
const { USER_ERRORS } = require('../constants/errors.constants')

const userModel = require('../models/user.models')

const authService = {
  signUp: async (reqBody, res) => {
    const usedEmail = await userModel.findOne({
      email: reqBody.email,
    })

    if (usedEmail) return res.status(404).json('This email already exists')

    const user = await userModel.create(reqBody)

    const token = sendToken(user, res)

    return { user, token }
  },

  login: async (reqBody, res) => {
    const user = await userModel
      .findOne({ email: reqBody.email })
      .select('+password')

    if (!user) return USER_ERRORS.NOT_FOUND

    if (!(await user.comparePassword(reqBody.password, user.password)))
      return USER_ERRORS.NOT_FOUND

    const jwtToken = sendToken(user)

    console.log(jwtToken);
    return { user, jwtToken }
  },
}

module.exports = authService
