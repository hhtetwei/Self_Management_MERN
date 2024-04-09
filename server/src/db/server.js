const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
const MONGODB_URL = process.env.MONGODB_URL
mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))
