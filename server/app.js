const express = require('express')
const app = express()

require('dotenv').config()
require('module-alias/register')

// middlewares
require('@config/middlewares/setup')(app)

// mongoose
require('@config/setMongooseLink')(app)

// routes
app.use('/', require('./routes/'))

module.exports = app
