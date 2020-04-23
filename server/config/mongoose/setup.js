const mongoose = require('mongoose')

const collection = 'APIAuthentication'

module.exports = (app) => {
	mongoose.set('useCreateIndex', true)

	const collection =
		process.env.NODE_ENV === 'test'
			? 'APIAuthenticationTEST'
			: 'APIAuthentication'
	mongoose.connect(
		`mongodb://localhost/${collection}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => {
			console.log(`[Mongoose] successfully connected to ${collection}`)
		}
	)

	return mongoose
}