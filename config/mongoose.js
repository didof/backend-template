const mongoose = require('mongoose')

const collection = 'APIAuthentication'

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://localhost/${collection}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, () => {
    console.log(`[Mongoose] successfully connected to ${collection}`)
})

module.exports = mongoose