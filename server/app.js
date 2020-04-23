const express = require('express')
const app = express()

require('dotenv').config()
require('module-alias/register')

// middlewares
require('@config/pickMiddlewaresSet')(app)

// mongoose
//TODO: in base a ambiente, imposta la connessione al database
require('@config/setMongooseLink')(app)

// routes
app.use('/', require('./routes/'))

// const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`[server] listen on port ${port}`))

module.exports = app
