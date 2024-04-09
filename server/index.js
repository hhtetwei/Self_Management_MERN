require('dotenv').config()
require('./src/db/server')

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb' }))

const noteRoute = require('./src/routes/notes.routes')
const toDoRoute = require('./src/routes/toDos.routes')
const toBuyRoute = require('./src/routes/toBuy.routes')
const toTravelRoute = require('./src/routes/toTravel.routes')
const authRoute = require('./src/routes/auth.routes')
const usersRoute = require('./src/routes/users.routes')

app.use('/api/notes', noteRoute)
app.use('/api/toDo', toDoRoute)
app.use('/api/toBuy', toBuyRoute)
app.use('/api/toTravel', toTravelRoute)
app.use('/api/auth', authRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  })
})

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message,
    },
  })
})
const port = 8000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
