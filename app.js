const express = require('express')
const app = express()

require('dotenv').config()
require('module-alias/register')

// middlewares
app.use(require('./middlewares/common'))

// mongoose
require('./config/mongoose')

// routes
app.use('/', require('./routes/'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`[server] listen on port ${port}`))
