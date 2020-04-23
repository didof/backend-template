const express = require('express')
const app = express()

require('dotenv').config()
require('module-alias/register')

// middlewares
require('@helpers/checkNODE_ENV')(app, 'test')

// mongoose
require('./config/mongoose')

// routes
app.use('/', require('./routes/'))

// const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`[server] listen on port ${port}`))

module.exports = app
