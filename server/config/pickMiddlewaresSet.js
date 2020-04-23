module.exports = (app) => {
	const env = process.env.NODE_ENV

	console.log('[helpers/pickMiddlewaresSet] modality: ' + env)
	return app.use(require('@middlewares/general')(env))
}
