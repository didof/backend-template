const express = require('express')
const app = express()

require('dotenv').config()
require('module-alias/register')

// middlewares
app.use(require('@config/middlewares/setup')(app))

// mongoose
require('@config/mongoose/setup')(app)

// routes
app.use('/', require('./routes/'))

module.exports = app
