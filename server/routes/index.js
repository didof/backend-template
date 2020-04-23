const app = require('express')()

app.use(process.env.BASE_API_URL, require('./api/'))
// app.use(process.env.BASE_BROWSE_URL, require('./browse/'))

module.exports = app