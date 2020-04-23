module.exports = (app, env) => {
	console.log('[helpers/checkNODE_ENV] modality: ' + env)
	return app.use(require('@middlewares/general')[env])
}
